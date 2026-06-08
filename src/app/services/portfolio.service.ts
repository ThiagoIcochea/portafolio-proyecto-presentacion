import { Injectable } from '@angular/core';
import { Technology, ContactLink, NavLink } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {


  readonly name = 'Thiago Paolo Icochea Rodriguez';
  readonly firstName = 'Thiago';
  readonly role = 'Desarrollador Full Stack';
  readonly roleAccent = 'Orientado a Backend';
 
  readonly bio = `Soy un desarrollador apasionado por construir soluciones robustas y escalables.
Me especializo en backend pero tengo sólidos conocimientos frontend, lo que me permite
entregar productos completos de principio a fin.`;
 
  readonly contactLinks: ContactLink[] = [
    {
      label: 'WhatsApp',
      url: 'https://wa.link/6qd7ga', 
      icon: '../../../assets/whatsapp.png',
      color: '#25D366',
    },
    {
      label: 'Email',
      url: 'mailto:ticochearodriguez@gmail.com', 
      icon: '../../../assets/email.webp',
      color: '#00B4D8',
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/thiago-paolo-icochea-rodríguez-04b0932b6?utm_source=share_via&utm_content=profile&utm_medium=member_android', 
      icon: '../../../assets/linkedin.png',
      color: '#0A66C2',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/ThiagoIcochea', 
      icon: '../../../assets/github.webp',
      color: '#E8F4F8',
    },
  ];

  readonly technologies: Technology[] = [
    { name: 'Java',        icon: '../../../assets/java.png', color: '#E76F00', category: 'backend'   },
    { name: 'Node.js',     icon: '../../../assets/nodejs.png', color: '#68A063', category: 'backend'   },
    { name: 'Spring Boot', icon: '../../../assets/springboot.png', color: '#169b0a', category: 'backend'   },
    { name: 'C#',          icon: '../../../assets/cshar.png', color: '#9B4F96', category: 'backend'   },
    { name: 'Python',      icon: '../../../assets/python.png', color: '#3776AB', category: 'backend'   },
    { name: 'C++',         icon: '../../../assets/cplusplus.png', color: '#00599C', category: 'language'  },
    { name: 'TypeScript',  icon: '../../../assets/typescript.png', color: '#3178C6', category: 'language'  },
    { name: 'JavaScript',  icon: '../../../assets/javascript.png', color: '#F7DF1E', category: 'language'  },
    { name: 'Angular',     icon: '../../../assets/angular.png', color: '#DD0031', category: 'frontend'  },
    { name: 'React',       icon: '../../../assets/react.png', color: '#61DAFB', category: 'frontend'  },
    { name: 'MySQL',       icon: '../../../assets/mysql.png', color: '#4479A1', category: 'database'  },
    { name: 'SQL Server',  icon: '../../../assets/sqlserver.png', color: '#CC2927', category: 'database'  },
    { name: 'MongoDB',     icon: '../../../assets/mongodb.png', color: '#47A248', category: 'database'  },
    { name: 'Docker',      icon: '../../../assets/docker.png', color: '#2496ED', category: 'devops'    },
  ];
  

  readonly navLinks: NavLink[] = [
    { label: 'Inicio',      path: '/'           },
    { label: 'Sobre mí',    path: '/sobre-mi'   },
    { label: 'Habilidades', path: '/habilidades'},
    { label: 'Contacto',    path: '/contacto'   },
  ];
}
