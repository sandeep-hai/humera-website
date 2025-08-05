import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">
            Empowering Business with
            <span class="highlight">Artificial Intelligence</span>
          </h1>
          <p class="hero-description">
            Leading AI/ML solutions provider specializing in Data Science, Analytics, 
            Generative AI, and Agentic AI systems. Transform your business with 
            cutting-edge technology and expert consulting.
          </p>
          <div class="hero-actions">
            <a routerLink="/contact" class="btn-primary">Get Started</a>
            <a routerLink="/about" class="btn-secondary">Learn More</a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="ai-grid">
            <div class="grid-item" *ngFor="let item of gridItems; let i = index" 
                 [style.animation-delay]="i * 0.1 + 's'">
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 20% 80%, rgba(156, 34, 68, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, rgba(156, 34, 68, 0.1) 0%, transparent 50%);
    }

    .hero-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      position: relative;
      z-index: 1;
    }

    .hero-content {
      animation: slideInLeft 1s ease-out;
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: 1.5rem;
      color: var(--text-primary);
    }

    .highlight {
      color: var(--primary-color);
      background: linear-gradient(135deg, var(--primary-color), #c73659);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-description {
      font-size: 1.25rem;
      line-height: 1.6;
      color: var(--text-secondary);
      margin-bottom: 2.5rem;
    }

    .hero-actions {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .btn-primary, .btn-secondary {
      padding: 1rem 2rem;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }

    .btn-primary {
      background: var(--primary-color);
      color: white;
      border: 2px solid var(--primary-color);
    }

    .btn-primary:hover {
      background: transparent;
      color: var(--primary-color);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(156, 34, 68, 0.3);
    }

    .btn-secondary {
      background: transparent;
      color: var(--text-primary);
      border: 2px solid var(--border-color);
    }

    .btn-secondary:hover {
      border-color: var(--primary-color);
      color: var(--primary-color);
      transform: translateY(-2px);
    }

    .hero-visual {
      display: flex;
      justify-content: center;
      align-items: center;
      animation: slideInRight 1s ease-out;
    }

    .ai-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      max-width: 300px;
    }

    .grid-item {
      background: rgba(156, 34, 68, 0.1);
      border: 1px solid rgba(156, 34, 68, 0.3);
      border-radius: 8px;
      padding: 1rem;
      text-align: center;
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--primary-color);
      animation: float 3s ease-in-out infinite;
      backdrop-filter: blur(10px);
    }

    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    @media (max-width: 768px) {
      .hero-container {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
      }

      .hero-title {
        font-size: 2.5rem;
      }

      .hero-description {
        font-size: 1.125rem;
      }

      .ai-grid {
        max-width: 250px;
      }
    }
  `]
})
export class HeroComponent {
  gridItems = [
    'AI/ML',
    'Data Science',
    'Analytics',
    'Gen AI',
    'AI Agents',
    'Agentic AI',
    'Power BI',
    'Azure',
    'Multi-cloud'
  ];
}