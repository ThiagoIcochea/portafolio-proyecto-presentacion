import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  name: string;
  typo: string;
  category: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  status: string;
  githubIcon: string;
  technologies: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      name: 'Thirix',
      typo: 'web',
      category: 'Red Social Multimedia en Tiempo Real',
      description:
        'Plataforma social moderna desarrollada con React, TypeScript, Node.js, MongoDB y Socket.IO. Permite publicar contenido multimedia, enviar mensajes privados, recibir notificaciones en tiempo real y realizar transmisiones en vivo.',

      image: 'assets/thirix-preview.png',

      github:
        'https://github.com/ThiagoIcochea/portafolio-proyecto-thirix.git',

      demo:
        'https://portafolio-proyecto-thirix-1.onrender.com',

      githubIcon:
        'assets/github.webp',

      status: 'Proyecto Finalizado',

      technologies: [
        'React',
        'TypeScript',
        'Vite',
        'Node.js',
        'Express',
        'MongoDB',
        'Socket.IO',
        'Tailwind CSS',
        'Cloudinary',
        'JWT'
      ]
    }

    ,

    {
  name: 'Sophix AI',
  typo: 'apk',
  category: 'Inteligencia Artificial • RAG • Mobile',
  description:
    'Plataforma de IA capaz de analizar repositorios GitHub mediante arquitectura RAG, embeddings y búsqueda vectorial. Permite conversar con el código fuente utilizando múltiples modelos de IA, indexación automática con n8n y chat en tiempo real mediante WebSockets.',
  image: 'assets/sophixia.jpg',
  status: 'Activo',
  technologies: [
    'NestJS',
    'React Native',
    'Expo',
    'TypeScript',
    'PostgreSQL',
    'Qdrant',
    'Jina AI',
    'WebSockets',
    'GitHub API',
    'Azure Key Vault',
    'n8n',
    'RAG'
  ],
  demo: 'https://github.com/ThiagoIcochea/portafolio-proyecto-presentacion/releases/download/version/application-7c8a5299-566f-41b5-9f71-1fd146d2371a.apk',
  github: 'https://github.com/ThiagoIcochea/portafolio-proyecto-sophix.git',
  githubIcon: 'assets/github.webp'
}
  ];

}