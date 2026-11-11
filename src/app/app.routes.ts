import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    data: {
      path: '/',
      title: 'Thiago Paolo Icochea Rodríguez | Desarrollador Full Stack Backend',
      description:
        'Portafolio de Thiago Paolo Icochea Rodríguez, desarrollador Full Stack orientado a Backend (Java, Spring Boot, Node.js, Angular). Proyectos, habilidades técnicas y contacto.',
    },
  },
  {
    path: 'sobre-mi',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
    data: {
      path: '/sobre-mi',
      title: 'Sobre mí | Thiago Paolo Icochea - Desarrollador Full Stack',
      description:
        'Conoce la formación, experiencia profesional e intereses de Thiago Paolo Icochea Rodríguez, desarrollador Full Stack orientado a Backend.',
    },
  },
  {
    path: 'habilidades',
    loadComponent: () =>
      import('./pages/skills/skills.component').then((m) => m.SkillsComponent),
    data: {
      path: '/habilidades',
      title: 'Habilidades técnicas | Thiago Paolo Icochea',
      description:
        'Tecnologías que domina Thiago Paolo Icochea: Java, Spring Boot, Node.js, C#, Python, Angular, React, MySQL, SQL Server, MongoDB y Docker.',
    },
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    data: {
      path: '/contacto',
      title: 'Contacto | Thiago Paolo Icochea - Desarrollador Full Stack',
      description:
        'Contacta a Thiago Paolo Icochea Rodríguez por WhatsApp, email, LinkedIn o GitHub para proyectos de desarrollo Full Stack.',
    },
  },
  {
    path: 'proyectos',
    loadComponent: () =>
      import('./pages/projects/projects.component').then((m) => m.ProjectsComponent),
    data: {
      path: '/proyectos',
      title: 'Proyectos | Thiago Paolo Icochea - Portafolio Full Stack',
      description:
        'Explora los proyectos personales de Thiago Paolo Icochea: aplicaciones Full Stack construidas con Java, Spring Boot, Angular, React y Node.js.',
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
