import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  portfolio = inject(PortfolioService);

  
  education = [
    {
      degree: 'Ingeniería de Software', 
      institution: 'Universidad Tecnológica del Perú', 
      period: '2026 – I', 
      status: 'En curso',
    },
 
  ];

  experience = [
    {
      role: 'Desarrollador Full Stack', 
      company: 'Proyectos independientes',           
      period: '2026 – I',                   
      description: 'Desarrollo de aplicaciones web con Angular, Node.js y bases de datos relacionales y no relacionales.', 
    },
  
  ];
  

 
  interests = [ '🎮 Videojuegos', '📚 Aprender', '🌐 Open Source', '🏊 Natación' ,'📜 Poesía','𝗘𝗡-Inglés'];
}
