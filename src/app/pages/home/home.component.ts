import {
  Component,
  inject,
  OnInit,
  OnDestroy,
  HostListener
} from '@angular/core';
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
  wheelSpeed = 0.4;

  private wheelInterval: ReturnType<typeof setInterval> | null = null;

 
  wheelRadius = 180;

  ngOnInit(): void {
    this.updateWheelRadius();
    this.startWheel();
  }

  ngOnDestroy(): void {
    this.stopWheel();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateWheelRadius();
  }

  private updateWheelRadius(): void {

    if (window.innerWidth <= 480) {
      this.wheelRadius = 90;
    }
    else if (window.innerWidth <= 768) {
      this.wheelRadius = 110;
    }
    else if (window.innerWidth <= 1024) {
      this.wheelRadius = 140;
    }
    else {
      this.wheelRadius = 180;
    }
  }

  get wheelItems(): Array<Technology & { x: number; y: number; angle: number }> {

    return this.portfolio.technologies.map((tech, i) => {

      const angle =
        (360 / this.portfolio.technologies.length) * i;

      const rad =
        (angle * Math.PI) / 180;

      return {
        ...tech,
        angle,
        x: Math.cos(rad) * this.wheelRadius,
        y: Math.sin(rad) * this.wheelRadius,
      };
    });
  }

  private startWheel(): void {
    this.wheelInterval = setInterval(() => {
      this.wheelAngle =
        (this.wheelAngle + this.wheelSpeed) % 360;
    }, 16);
  }

  private stopWheel(): void {
    if (this.wheelInterval) {
      clearInterval(this.wheelInterval);
      this.wheelInterval = null;
    }
  }

  pauseWheel(): void {
    this.stopWheel();
  }

  resumeWheel(): void {
    if (!this.wheelInterval) {
      this.startWheel();
    }
  }
}