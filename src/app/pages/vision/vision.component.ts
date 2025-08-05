import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisionComponent as VisionSectionComponent } from '../../components/vision/vision.component';

@Component({
  selector: 'app-vision-page',
  standalone: true,
  imports: [CommonModule, VisionSectionComponent],
  template: `
    <div class="page-container">
      <div class="page-header">
        <div class="container">
          <h1 class="page-title">Our Vision</h1>
          <p class="page-subtitle">
            Shaping the future of artificial intelligence for a better tomorrow
          </p>
        </div>
      </div>
      <app-vision></app-vision>
      
      <section class="future-goals">
        <div class="container">
          <h2 class="section-title">Future Goals</h2>
          <div class="goals-grid">
            <div class="goal-item">
              <div class="goal-year">2025</div>
              <h3>AI Democratization</h3>
              <p>Make advanced AI capabilities accessible to small and medium businesses through simplified platforms and affordable solutions.</p>
            </div>
            
            <div class="goal-item">
              <div class="goal-year">2026</div>
              <h3>Global Expansion</h3>
              <p>Establish partnerships across multiple continents to bring AI solutions to emerging markets and underserved communities.</p>
            </div>
            
            <div class="goal-item">
              <div class="goal-year">2027</div>
              <h3>Sustainable AI</h3>
              <p>Pioneer environmentally conscious AI development practices and carbon-neutral cloud computing solutions.</p>
            </div>
            
            <div class="goal-item">
              <div class="goal-year">2028</div>
              <h3>AI Education</h3>
              <p>Launch comprehensive AI literacy programs for educational institutions and workforce development initiatives.</p>
            </div>
          </div>
        </div>
      </section>
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

    .future-goals {
      padding: 6rem 0;
      background: var(--bg-secondary);
    }

    .section-title {
      text-align: center;
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 3rem;
    }

    .goals-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .goal-item {
      background: var(--bg-primary);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      padding: 2.5rem;
      text-align: center;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .goal-item::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, var(--primary-color), #c73659);
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }

    .goal-item:hover {
      transform: translateY(-5px);
      border-color: var(--primary-color);
      box-shadow: 0 20px 40px rgba(156, 34, 68, 0.15);
    }

    .goal-item:hover::before {
      transform: scaleX(1);
    }

    .goal-year {
      font-size: 2rem;
      font-weight: 800;
      color: var(--primary-color);
      margin-bottom: 1rem;
    }

    .goal-item h3 {
      color: var(--text-primary);
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .goal-item p {
      color: var(--text-secondary);
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .page-title {
        font-size: 2.5rem;
      }

      .page-subtitle {
        font-size: 1.25rem;
      }

      .goals-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class VisionComponent {}