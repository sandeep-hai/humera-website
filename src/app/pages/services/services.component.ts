import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent as ServicesSectionComponent } from '../../components/services/services.component';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [CommonModule, ServicesSectionComponent],
  template: `
    <div class="page-container">
      <div class="page-header">
        <div class="container">
          <h1 class="page-title">Our Services</h1>
          <p class="page-subtitle">
            Comprehensive AI and data science solutions to accelerate your digital transformation
          </p>
        </div>
      </div>
      <app-services></app-services>
      
      <section class="additional-info">
        <div class="container">
          <div class="info-grid">
            <div class="info-card">
              <div class="info-icon">🚀</div>
              <h3>Product Development</h3>
              <p>From ideation to deployment, we build scalable AI solutions that drive real business value.</p>
              <ul>
                <li>Custom AI/ML model development</li>
                <li>Full-stack application development</li>
                <li>Cloud-native architecture</li>
                <li>DevOps and automation</li>
              </ul>
            </div>
            
            <div class="info-card">
              <div class="info-icon">💡</div>
              <h3>Consulting Services</h3>
              <p>Strategic guidance to help you navigate the AI landscape and make informed decisions.</p>
              <ul>
                <li>AI strategy development</li>
                <li>Technology assessment</li>
                <li>Data architecture design</li>
                <li>Digital transformation</li>
              </ul>
            </div>
            
            <div class="info-card">
              <div class="info-icon">🎓</div>
              <h3>Corporate Training</h3>
              <p>Upskill your team with cutting-edge AI and data science knowledge and practical skills.</p>
              <ul>
                <li>Customized curricula</li>
                <li>Hands-on workshops</li>
                <li>Executive briefings</li>
                <li>Certification programs</li>
              </ul>
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

    .additional-info {
      padding: 6rem 0;
      background: var(--bg-secondary);
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }

    .info-card {
      background: var(--bg-primary);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      padding: 2.5rem;
      transition: all 0.3s ease;
    }

    .info-card:hover {
      transform: translateY(-5px);
      border-color: var(--primary-color);
      box-shadow: 0 20px 40px rgba(156, 34, 68, 0.15);
    }

    .info-icon {
      font-size: 3rem;
      margin-bottom: 1.5rem;
    }

    .info-card h3 {
      color: var(--text-primary);
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .info-card p {
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .info-card ul {
      list-style: none;
      padding: 0;
    }

    .info-card li {
      color: var(--text-secondary);
      padding: 0.5rem 0;
      position: relative;
      padding-left: 1.5rem;
    }

    .info-card li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--primary-color);
      font-weight: bold;
    }

    @media (max-width: 768px) {
      .page-title {
        font-size: 2.5rem;
      }

      .page-subtitle {
        font-size: 1.25rem;
      }

      .info-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ServicesComponent {}