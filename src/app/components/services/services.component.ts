import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section id="services" class="services">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Services</h2>
          <p class="section-subtitle">
            Comprehensive AI and data science solutions to accelerate your digital transformation
          </p>
        </div>
        
        <div class="services-grid">
          <div class="service-card" *ngFor="let service of services; let i = index" 
               [style.animation-delay]="i * 0.1 + 's'">
            <div class="service-icon">{{ service.icon }}</div>
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
            <ul class="service-features">
              <li *ngFor="let feature of service.features">{{ feature }}</li>
            </ul>
            <div class="service-action">
              <a routerLink="/contact" class="service-btn">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services {
      padding: 6rem 0;
      background: var(--bg-primary);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 1rem;
    }

    .section-subtitle {
      font-size: 1.25rem;
      color: var(--text-secondary);
      max-width: 600px;
      margin: 0 auto;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }

    .service-card {
      background: var(--bg-secondary);
      border: 1px solid var(--border-color);
      border-radius: 16px;
      padding: 2.5rem;
      transition: all 0.3s ease;
      animation: fadeInUp 0.6s ease-out forwards;
      opacity: 0;
      transform: translateY(30px);
      position: relative;
      overflow: hidden;
    }

    .service-card::before {
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

    .service-card:hover {
      transform: translateY(-10px);
      border-color: var(--primary-color);
      box-shadow: 0 20px 40px rgba(156, 34, 68, 0.2);
    }

    .service-card:hover::before {
      transform: scaleX(1);
    }

    .service-icon {
      font-size: 3.5rem;
      margin-bottom: 1.5rem;
      display: block;
    }

    .service-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 1rem;
    }

    .service-description {
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .service-features {
      list-style: none;
      padding: 0;
      margin-bottom: 2rem;
    }

    .service-features li {
      color: var(--text-secondary);
      padding: 0.5rem 0;
      position: relative;
      padding-left: 1.5rem;
    }

    .service-features li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--primary-color);
      font-weight: bold;
    }

    .service-action {
      margin-top: auto;
    }

    .service-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      background: transparent;
      color: var(--primary-color);
      border: 2px solid var(--primary-color);
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
    }

    .service-btn:hover {
      background: var(--primary-color);
      color: white;
      transform: translateY(-2px);
    }

    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 768px) {
      .services-grid {
        grid-template-columns: 1fr;
      }

      .section-title {
        font-size: 2rem;
      }

      .service-card {
        padding: 2rem;
      }
    }
  `]
})
export class ServicesComponent {
  services = [
    {
      icon: '🚀',
      title: 'Product Development',
      description: 'End-to-end AI product development from concept to deployment, creating scalable and robust solutions.',
      features: [
        'Custom AI/ML model development',
        'Full-stack application development',
        'Cloud-native architecture design',
        'DevOps and deployment automation',
        'Performance optimization'
      ]
    },
    {
      icon: '💡',
      title: 'Consulting Services',
      description: 'Strategic AI consulting to help organizations identify opportunities and implement data-driven solutions.',
      features: [
        'AI strategy and roadmap development',
        'Technology assessment and selection',
        'Data architecture consulting',
        'AI governance and ethics',
        'Digital transformation guidance'
      ]
    },
    {
      icon: '🎓',
      title: 'Corporate Training',
      description: 'Comprehensive training programs to upskill your team in AI, ML, and data science technologies.',
      features: [
        'Customized training curricula',
        'Hands-on workshops and labs',
        'Executive AI awareness sessions',
        'Technical deep-dive courses',
        'Certification programs'
      ]
    }
  ];
}