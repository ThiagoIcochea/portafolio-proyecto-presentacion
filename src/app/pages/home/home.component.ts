import { Component, inject, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../services/portfolio.service';
import { Technology } from '../../models/portfolio.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  portfolio = inject(PortfolioService);

  
  wheelAngle = 0;
  private wheelInterval: ReturnType<typeof setInterval> | null = null;
  wheelSpeed = 0.4; 

  
  get wheelItems(): Array<Technology & { x: number; y: number; angle: number }> {
    return this.portfolio.technologies.map((tech, i) => {
      const angle = (360 / this.portfolio.technologies.length) * i;
      const rad   = (angle * Math.PI) / 180;
      const radius = 180; 
      return {
        ...tech,
        angle,
        x: Math.cos(rad) * radius,
        y: Math.sin(rad) * radius,
      };
    });
  }

  ngOnInit(): void {
    this.startWheel();
  }

  ngOnDestroy(): void {
    this.stopWheel();
  }

  private startWheel(): void {
    this.wheelInterval = setInterval(() => {
      this.wheelAngle = (this.wheelAngle + this.wheelSpeed) % 360;
    }, 16); 
  }

  private stopWheel(): void {
    if (this.wheelInterval) clearInterval(this.wheelInterval);
  }

  pauseWheel(): void { this.stopWheel(); }
  resumeWheel(): void { this.startWheel(); }
}
