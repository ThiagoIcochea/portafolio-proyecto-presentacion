import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../services/portfolio.service';
import { Technology } from '../../models/portfolio.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  portfolio = inject(PortfolioService);

  categories = [
    { key: 'backend',   label: 'Backend',   icon: '⚙️' },
    { key: 'frontend',  label: 'Frontend',  icon: '🎨' },
    { key: 'database',  label: 'Bases de datos', icon: '🗄️' },
    { key: 'language',  label: 'Lenguajes', icon: '💻' },
    { key: 'devops',    label: 'DevOps',    icon: '🐳' },
  ];

  activeCategory: string = 'all';

  setCategory(cat: string): void {
    this.activeCategory = cat;
  }

  get filteredTechs(): Technology[] {
    if (this.activeCategory === 'all') return this.portfolio.technologies;
    return this.portfolio.technologies.filter(
      (t) => t.category === this.activeCategory
    );
  }

 
  softSkills = [
    { label: 'Trabajo en equipo',    icon: '🤝' },
    { label: 'Resolución de problemas', icon: '🧩' },
    { label: 'Aprendizaje rápido',   icon: '⚡' },
    { label: 'Comunicación efectiva',icon: '💬' },
    { label: 'Proactividad',         icon: '🚀' },
    { label: 'Adaptabilidad',        icon: '🔄' },
  ];
 
}
