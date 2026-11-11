import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export const SITE_URL = 'https://thiagoicochea.github.io/portafolio-proyecto-presentacion';
export const SITE_NAME = 'Thiago Paolo Icochea Rodríguez';
export const OG_IMAGE = `${SITE_URL}/assets/foto.png`;

export interface SeoData {
  title: string;
  description: string;
  path: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(
    private readonly titleService: Title,
    private readonly meta: Meta,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {}

  update(data: SeoData): void {
    const url = this.buildUrl(data.path);
    const fullTitle = data.title;

    this.titleService.setTitle(fullTitle);

    this.setTag('description', data.description);

    this.setProperty('og:title', fullTitle);
    this.setProperty('og:description', data.description);
    this.setProperty('og:url', url);
    this.setProperty('og:type', 'website');
    this.setProperty('og:image', OG_IMAGE);
    this.setProperty('og:locale', 'es_ES');
    this.setProperty('og:site_name', SITE_NAME);

    this.setTag('twitter:card', 'summary_large_image');
    this.setTag('twitter:title', fullTitle);
    this.setTag('twitter:description', data.description);
    this.setTag('twitter:image', OG_IMAGE);

    this.setCanonical(url);
  }

  setJsonLd(id: string, json: object): void {
    const existing = this.document.getElementById(id);
    if (existing) {
      existing.remove();
    }
    const script = this.document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(json);
    this.document.head.appendChild(script);
  }

  private buildUrl(path: string): string {
    // GitHub Pages 301-redirects "/foo" to "/foo/" (directory + index.html),
    // so the canonical must be the trailing-slash form that serves directly.
    const normalized = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}/`;
    return `${SITE_URL}${normalized}`;
  }

  private setTag(name: string, content: string): void {
    this.meta.updateTag({ name, content });
  }

  private setProperty(property: string, content: string): void {
    this.meta.updateTag({ property, content });
  }

  private setCanonical(url: string): void {
    let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
