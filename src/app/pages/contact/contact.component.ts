import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  portfolio = inject(PortfolioService);

 
  reasons = [
    { icon: '🎓', title: 'Prácticas profesionales', desc: 'Estoy buscando oportunidades para iniciar mi carrera profesional.' },
    { icon: '🚀', title: 'Proyectos Independientes',     desc: 'Disponible para proyectos part-time o full-time según disponibilidad.' },
    { icon: '🤝', title: 'Colaboración',            desc: 'Siempre abierto a colaborar con otros desarrolladores.' },
  ];
  
}
