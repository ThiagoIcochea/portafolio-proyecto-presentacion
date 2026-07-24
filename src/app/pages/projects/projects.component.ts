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

      status: 'Activo',

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
  name: 'Sophix IA',
  typo: 'apk',
  category: 'Inteligencia Artificial • RAG • Mobile',
  description:
    'Plataforma de IA capaz de analizar repositorios GitHub mediante arquitectura RAG, embeddings y búsqueda vectorial. Permite conversar con el código fuente utilizando múltiples modelos de IA, indexación automática con n8n y chat en tiempo real mediante WebSockets.',
  image: 'assets/sophixia.png',
  status: 'Activo',
  technologies: [
    'NestJS',
    'React Native',
    'Expo',
    'TypeScript',
    'PostgreSQL',
    'Qdrant',
    'WebSockets',
    'GitHub API',
    'Azure Key Vault',
    'n8n',
    'RAG'
  ],
  demo: 'https://github.com/ThiagoIcochea/portafolio-proyecto-presentacion/releases/download/version/application-7c8a5299-566f-41b5-9f71-1fd146d2371a.apk',
  github: 'https://github.com/ThiagoIcochea/portafolio-proyecto-sophix.git',
  githubIcon: 'assets/github.webp'
},

{
  name: 'Nethink',
  typo: 'web',
  category: 'Marketplace B2B • Trabajo Colaborativo',
  description:
    'Marketplace B2B desarrollado de forma colaborativa para conectar empresas proveedoras y compradoras mediante una plataforma moderna de comercio electrónico. Como Technical Lead, lideré la arquitectura técnica, la integración entre el frontend y el backend, la coordinación del desarrollo y la definición de estándares del proyecto. El sistema incorpora autenticación, gestión de productos, panel administrativo y una API REST escalable. Proyecto desarrollado junto a Iker Jared Rondoy Perez, Valeri Alexandra Torres Guerrero y Angel Gabriel Valle Cotera.',

  image: 'assets/netthink-preview.png',

  github:
    'https://github.com/ThiagoIcochea/ProyectoInnovacion.git',

  demo:
    'https://proyectoinnovacion-1.onrender.com/login',

  githubIcon:
    'assets/github.webp',

  status: 'Finalizado',

  technologies: [
    'Angular',
    'SASS',
    'Node.js',
    'Express',
    'MySQL',
    'JWT',
    'REST API'
  ]
},

{
  name: 'Nendoshop',
  typo: 'web',
  category: 'E-commerce Full Stack • Trabajo Colaborativo',
  description:
    'Plataforma de comercio electrónico Full Stack desarrollada de forma colaborativa para ofrecer una experiencia completa de compra en línea. Como Technical Lead, lideré la arquitectura técnica, la planificación del desarrollo y la integración entre el frontend en React, el backend en Node.js y MongoDB Atlas. Además, coordiné la implementación de funcionalidades como autenticación, catálogo de productos, carrito de compras, gestión de pedidos y comunicación en tiempo real. Proyecto desarrollado junto a Percy Alonzo Chabria Loayza, Aaron Toribio Rojas Olano, Melany Daniela Carbajal Añanca, Laura Angélica Gómez Linares y Antonio Nicolás Guevara Morales.',

  image: 'assets/nendoshop-preview.png',

  github:
    'https://github.com/ThiagoIcochea/nendoshop',

  demo:
    'https://nendoshop.onrender.com',

  githubIcon:
    'assets/github.webp',

  status: 'Finalizado',

  technologies: [
    'React',
    'Tailwind CSS',
    'Node.js',
    'Express',
    'MongoDB Atlas',
    'Socket.IO',
    'JWT',
    'REST API'
  ]
}
  ];

}