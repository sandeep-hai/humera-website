import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-competencies',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="competencies" class="competencies">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Core Competencies</h2>
          <p class="section-subtitle">
            Deep expertise across the entire AI and data science technology stack
          </p>
        </div>
        
        <div class="competencies-grid">
          <div class="competency-category" *ngFor="let category of competencies">
            <div class="category-header">
              <div class="category-icon">{{ category.icon }}</div>
              <h3 class="category-title">{{ category.title }}</h3>
            </div>
            <div class="skills-grid">
              <div class="skill-item" *ngFor="let skill of category.skills">
                <div class="skill-name">{{ skill.name }}</div>
                <div class="skill-bar">
                  <div class="skill-progress" [style.width]="skill.level + '%'"></div>
                </div>
                <div class="skill-level">{{ skill.level }}%</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="technologies">
          <h3 class="tech-title">Technologies & Platforms</h3>
          <div class="tech-grid">
            <div class="tech-item" *ngFor="let tech of technologies">
              <div class="tech-icon">{{ tech.icon }}</div>
              <span class="tech-name">{{ tech.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .competencies {
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

    .competencies-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 3rem;
      margin-bottom: 4rem;
    }

    .competency-category {
      background: var(--bg-primary);
      border: 1px solid var(--border-color);
      border-radius: 16px;
      padding: 2.5rem;
      transition: all 0.3s ease;
    }

    .competency-category:hover {
      border-color: var(--primary-color);
      box-shadow: 0 10px 30px rgba(156, 34, 68, 0.1);
    }

    .category-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .category-icon {
      font-size: 2.5rem;
    }

    .category-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-primary);
    }

    .skills-grid {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .skill-item {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 1rem;
      align-items: center;
    }

    .skill-name {
      color: var(--text-secondary);
      font-weight: 500;
    }

    .skill-bar {
      grid-column: 1 / -1;
      height: 8px;
      background: rgba(156, 34, 68, 0.1);
      border-radius: 4px;
      overflow: hidden;
      margin-top: 0.5rem;
    }

    .skill-progress {
      height: 100%;
      background: linear-gradient(90deg, var(--primary-color), #c73659);
      border-radius: 4px;
      transition: width 1s ease-out;
      animation: progressAnimation 2s ease-out;
    }

    .skill-level {
      color: var(--primary-color);
      font-weight: 600;
      font-size: 0.875rem;
      grid-column: 2;
      grid-row: 1;
    }

    .technologies {
      margin-top: 4rem;
    }

    .tech-title {
      text-align: center;
      font-size: 2rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 2rem;
    }

    .tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1.5rem;
    }

    .tech-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      padding: 1.5rem;
      background: var(--bg-primary);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      transition: all 0.3s ease;
    }

    .tech-item:hover {
      transform: translateY(-5px);
      border-color: var(--primary-color);
      box-shadow: 0 8px 20px rgba(156, 34, 68, 0.15);
    }

    .tech-icon {
      font-size: 2rem;
    }

    .tech-name {
      color: var(--text-secondary);
      font-weight: 500;
      text-align: center;
    }

    @keyframes progressAnimation {
      from {
        width: 0;
      }
    }

    @media (max-width: 768px) {
      .competencies-grid {
        grid-template-columns: 1fr;
      }

      .section-title {
        font-size: 2rem;
      }

      .competency-category {
        padding: 2rem;
      }

      .tech-grid {
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      }
    }
  `]
})
export class CompetenciesComponent {
  competencies = [
    {
      icon: '🤖',
      title: 'AI & Machine Learning',
      skills: [
        { name: 'Deep Learning', level: 95 },
        { name: 'Natural Language Processing', level: 90 },
        { name: 'Computer Vision', level: 88 },
        { name: 'Reinforcement Learning', level: 85 },
        { name: 'MLOps', level: 92 }
      ]
    },
    {
      icon: '📊',
      title: 'Data Science & Analytics',
      skills: [
        { name: 'Statistical Analysis', level: 93 },
        { name: 'Data Visualization', level: 90 },
        { name: 'Predictive Modeling', level: 88 },
        { name: 'Big Data Processing', level: 85 },
        { name: 'A/B Testing', level: 87 }
      ]
    },
    {
      icon: '☁️',
      title: 'Cloud & Infrastructure',
      skills: [
        { name: 'Azure Cloud Services', level: 90 },
        { name: 'Multi-cloud Architecture', level: 85 },
        { name: 'Kubernetes', level: 88 },
        { name: 'Docker', level: 92 },
        { name: 'CI/CD Pipelines', level: 87 }
      ]
    },
    {
      icon: '💻',
      title: 'Development & Tools',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'R', level: 88 },
        { name: 'SQL', level: 92 },
        { name: 'Power BI', level: 90 },
        { name: 'Git/GitHub', level: 93 }
      ]
    }
  ];

  technologies = [
    { icon: '🐍', name: 'Python' },
    { icon: '📊', name: 'R' },
    { icon: '🗄️', name: 'SQL' },
    { icon: '🧠', name: 'TensorFlow' },
    { icon: '🔥', name: 'PyTorch' },
    { icon: '📈', name: 'Power BI' },
    { icon: '☁️', name: 'Azure' },
    { icon: '🐳', name: 'Docker' },
    { icon: '⚙️', name: 'Kubernetes' },
    { icon: '🔄', name: 'MLflow' },
    { icon: '📊', name: 'Tableau' },
    { icon: '🌐', name: 'Apache Spark' }
  ];
}