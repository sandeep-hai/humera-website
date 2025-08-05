import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">About HumeraAI</h2>
          <p class="section-subtitle">
            Pioneering the future of artificial intelligence and data-driven solutions
          </p>
        </div>
        
        <div class="about-content">
          <div class="about-text">
            <p class="lead">
              HumeraAI is a cutting-edge technology company specializing in artificial intelligence, 
              machine learning, and data science solutions. We empower businesses to harness the 
              full potential of their data through innovative AI-driven approaches.
            </p>
            
            <div class="highlights">
              <div class="highlight-item">
                <div class="highlight-icon">🚀</div>
                <div class="highlight-content">
                  <h3>Innovation First</h3>
                  <p>Leading the charge in AI/ML technologies with cutting-edge solutions</p>
                </div>
              </div>
              
              <div class="highlight-item">
                <div class="highlight-icon">🎯</div>
                <div class="highlight-content">
                  <h3>Results Driven</h3>
                  <p>Delivering measurable business outcomes through data-driven insights</p>
                </div>
              </div>
              
              <div class="highlight-item">
                <div class="highlight-icon">🤝</div>
                <div class="highlight-content">
                  <h3>Partnership Focused</h3>
                  <p>Building long-term relationships with our clients for sustained success</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="about-stats">
            <div class="stat-item" *ngFor="let stat of stats">
              <div class="stat-number">{{ stat.number }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
        
        <div class="focus-areas">
          <h3 class="focus-title">Our Focus Areas</h3>
          <div class="focus-grid">
            <div class="focus-item" *ngFor="let area of focusAreas">
              <div class="focus-icon">{{ area.icon }}</div>
              <h4>{{ area.title }}</h4>
              <p>{{ area.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      padding: 6rem 0;
      background: var(--bg-secondary);
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

    .about-content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 4rem;
      margin-bottom: 4rem;
      align-items: start;
    }

    .lead {
      font-size: 1.25rem;
      line-height: 1.7;
      color: var(--text-secondary);
      margin-bottom: 2rem;
    }

    .highlights {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .highlight-item {
      display: flex;
      gap: 1rem;
      align-items: flex-start;
    }

    .highlight-icon {
      font-size: 2rem;
      flex-shrink: 0;
    }

    .highlight-content h3 {
      color: var(--text-primary);
      margin-bottom: 0.5rem;
      font-size: 1.125rem;
      font-weight: 600;
    }

    .highlight-content p {
      color: var(--text-secondary);
      line-height: 1.6;
    }

    .about-stats {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      background: rgba(156, 34, 68, 0.05);
      border: 1px solid rgba(156, 34, 68, 0.2);
      border-radius: 12px;
      padding: 2rem;
    }

    .stat-item {
      text-align: center;
    }

    .stat-number {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--primary-color);
      margin-bottom: 0.5rem;
    }

    .stat-label {
      color: var(--text-secondary);
      font-weight: 500;
    }

    .focus-areas {
      margin-top: 4rem;
    }

    .focus-title {
      text-align: center;
      font-size: 2rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 2rem;
    }

    .focus-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .focus-item {
      background: var(--bg-primary);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 2rem;
      text-align: center;
      transition: all 0.3s ease;
    }

    .focus-item:hover {
      transform: translateY(-5px);
      border-color: var(--primary-color);
      box-shadow: 0 10px 30px rgba(156, 34, 68, 0.2);
    }

    .focus-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .focus-item h4 {
      color: var(--text-primary);
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .focus-item p {
      color: var(--text-secondary);
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .about-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .about-stats {
        flex-direction: row;
        justify-content: space-around;
      }

      .stat-number {
        font-size: 2rem;
      }

      .focus-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AboutComponent {
  stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '25+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' }
  ];

  focusAreas = [
    {
      icon: '🤖',
      title: 'AI/ML Solutions',
      description: 'Advanced machine learning models and AI systems tailored to your business needs'
    },
    {
      icon: '📊',
      title: 'Data Science & Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics and visualization'
    },
    {
      icon: '✨',
      title: 'Generative AI',
      description: 'Cutting-edge generative AI solutions for content creation and automation'
    },
    {
      icon: '🔧',
      title: 'AI Agents & Agentic AI',
      description: 'Intelligent autonomous agents that can perform complex tasks and decision-making'
    },
    {
      icon: '📈',
      title: 'Power BI & Visualization',
      description: 'Interactive dashboards and business intelligence solutions for data-driven decisions'
    },
    {
      icon: '☁️',
      title: 'Azure & Multi-cloud',
      description: 'Cloud-native solutions leveraging Azure and multi-cloud architectures'
    }
  ];
}