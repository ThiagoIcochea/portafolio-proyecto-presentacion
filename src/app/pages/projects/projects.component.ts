import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  name: string;
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
  ];

}