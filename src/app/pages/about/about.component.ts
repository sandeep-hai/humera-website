import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent as AboutSectionComponent } from '../../components/about/about.component';
import { CompetenciesComponent } from '../../components/competencies/competencies.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, AboutSectionComponent, CompetenciesComponent],
  template: `
    <div class="page-container">
      <div class="page-header">
        <div class="container">
          <h1 class="page-title">About HumeraAI</h1>
          <p class="page-subtitle">
            Pioneering the future of artificial intelligence and data-driven solutions
          </p>
        </div>
      </div>
      <app-about></app-about>
      <app-competencies></app-competencies>
    </div>
  `,
  styles: [`
    .page-container {
      padding-top: 80px;
      min-height: 100vh;
    }

    .page-header {
      background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
      padding: 4rem 0;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .page-header::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 50% 50%, rgba(156, 34, 68, 0.1) 0%, transparent 70%);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      position: relative;
      z-index: 1;
    }

    .page-title {
      font-size: 3.5rem;
      font-weight: 800;
      color: var(--text-primary);
      margin-bottom: 1rem;
      background: linear-gradient(135deg, var(--text-primary), var(--primary-color));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .page-subtitle {
      font-size: 1.5rem;
      color: var(--text-secondary);
      max-width: 600px;
      margin: 0 auto;
    }

    @media (max-width: 768px) {
      .page-title {
        font-size: 2.5rem;
      }

      .page-subtitle {
        font-size: 1.25rem;
      }
    }
  `]
})
export class AboutComponent {}