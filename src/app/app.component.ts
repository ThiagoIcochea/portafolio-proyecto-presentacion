import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { VoiceNavComponent } from './components/voice-nav/voice-nav.component';
import { SeoService, SITE_URL, SITE_NAME, OG_IMAGE } from './services/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, VoiceNavComponent],
  template: `
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
    <app-voice-nav></app-voice-nav>
  `,
  styles: [`
    main {
      min-height: 100vh;
    }
  `]
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly seo: SeoService,
  ) {}

  ngOnInit(): void {
    this.seo.setJsonLd('ld-person', this.buildPersonSchema());
    this.seo.setJsonLd('ld-website', this.buildWebsiteSchema());

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.deepestRouteData()),
      )
      .subscribe((data) => {
        if (data) {
          this.seo.update({
            title: data['title'],
            description: data['description'],
            path: data['path'],
          });
          this.seo.setJsonLd('ld-breadcrumb', this.buildBreadcrumbSchema(data['path'], data['title']));
        }
      });

    // Set tags for the initial route too (NavigationEnd already fired during SSR/prerender resolve).
    const initial = this.deepestRouteData();
    if (initial) {
      this.seo.update({
        title: initial['title'],
        description: initial['description'],
        path: initial['path'],
      });
      this.seo.setJsonLd('ld-breadcrumb', this.buildBreadcrumbSchema(initial['path'], initial['title']));
    }
  }

  private deepestRouteData(): Record<string, any> | null {
    let route = this.activatedRoute.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route.snapshot.data['path'] ? route.snapshot.data : null;
  }

  private buildPersonSchema(): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      image: OG_IMAGE,
      jobTitle: 'Desarrollador Full Stack (Backend)',
      description:
        'Desarrollador Full Stack orientado a Backend, especializado en Java, Spring Boot, Node.js y Angular.',
      knowsAbout: [
        'Java', 'Spring Boot', 'Node.js', 'C#', 'Python', 'TypeScript', 'JavaScript',
        'Angular', 'React', 'MySQL', 'SQL Server', 'MongoDB', 'Docker',
      ],
      sameAs: [
        'https://github.com/ThiagoIcochea',
        'https://www.linkedin.com/in/thiago-paolo-icochea-rodríguez-04b0932b6',
      ],
    };
  }

  private buildWebsiteSchema(): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      inLanguage: 'es',
      description:
        'Portafolio profesional de Thiago Paolo Icochea Rodríguez, desarrollador Full Stack orientado a Backend.',
    };
  }

  private buildBreadcrumbSchema(path: string, title: string): object {
    const items = [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE_URL}/` }];
    if (path !== '/') {
      items.push({
        '@type': 'ListItem',
        position: 2,
        name: title.split('|')[0].trim(),
        item: `${SITE_URL}${path}/`,
      });
    }
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items,
    };
  }
}
