import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="vision" class="vision">
      <div class="container">
        <div class="vision-content">
          <div class="vision-text">
            <h2 class="vision-title">Our Vision</h2>
            <div class="vision-statement">
              <p class="vision-lead">
                To democratize artificial intelligence and make advanced AI capabilities 
                accessible to businesses of all sizes, driving innovation and creating 
                a more intelligent, data-driven world.
              </p>
            </div>
            
            <div class="vision-pillars">
              <div class="pillar" *ngFor="let pillar of visionPillars">
                <div class="pillar-icon">{{ pillar.icon }}</div>
                <div class="pillar-content">
                  <h3 class="pillar-title">{{ pillar.title }}</h3>
                  <p class="pillar-description">{{ pillar.description }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="vision-visual">
            <div class="vision-circle">
              <div class="circle-content">
                <div class="center-icon">🌟</div>
                <div class="orbit-items">
                  <div class="orbit-item" *ngFor="let item of orbitItems; let i = index"
                       [style.transform]="'rotate(' + (i * 60) + 'deg) translateY(-80px) rotate(-' + (i * 60) + 'deg)'">
                    {{ item }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mission-section">
          <h3 class="mission-title">Our Mission</h3>
          <p class="mission-text">
            We are committed to bridging the gap between cutting-edge AI research and practical 
            business applications. Through our expertise in AI/ML, data science, and cloud technologies, 
            we empower organizations to unlock the transformative potential of their data and achieve 
            sustainable competitive advantages in the digital age.
          </p>
          
          <div class="values">
            <div class="value-item" *ngFor="let value of values">
              <div class="value-icon">{{ value.icon }}</div>
              <h4 class="value-title">{{ value.title }}</h4>
              <p class="value-description">{{ value.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .vision {
      padding: 6rem 0;
      background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
      position: relative;
      overflow: hidden;
    }

    .vision::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 70% 30%, rgba(156, 34, 68, 0.05) 0%, transparent 50%);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      position: relative;
      z-index: 1;
    }

    .vision-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      margin-bottom: 4rem;
    }

    .vision-title {
      font-size: 3rem;
      font-weight: 800;
      color: var(--text-primary);
      margin-bottom: 2rem;
      background: linear-gradient(135deg, var(--text-primary), var(--primary-color));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .vision-lead {
      font-size: 1.5rem;
      line-height: 1.6;
      color: var(--text-secondary);
      margin-bottom: 3rem;
      font-weight: 300;
    }

    .vision-pillars {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .pillar {
      display: flex;
      gap: 1rem;
      align-items: flex-start;
    }

    .pillar-icon {
      font-size: 2rem;
      flex-shrink: 0;
    }

    .pillar-title {
      color: var(--text-primary);
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .pillar-description {
      color: var(--text-secondary);
      line-height: 1.6;
    }

    .vision-visual {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .vision-circle {
      position: relative;
      width: 300px;
      height: 300px;
    }

    .circle-content {
      position: relative;
      width: 100%;
      height: 100%;
      border: 2px solid rgba(156, 34, 68, 0.3);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: rotate 20s linear infinite;
    }

    .center-icon {
      font-size: 4rem;
      z-index: 2;
    }

    .orbit-items {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .orbit-item {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 60px;
      height: 60px;
      background: rgba(156, 34, 68, 0.1);
      border: 1px solid rgba(156, 34, 68, 0.3);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      backdrop-filter: blur(10px);
      animation: counterRotate 20s linear infinite;
    }

    .mission-section {
      text-align: center;
      margin-top: 4rem;
    }

    .mission-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 2rem;
    }

    .mission-text {
      font-size: 1.25rem;
      line-height: 1.7;
      color: var(--text-secondary);
      max-width: 800px;
      margin: 0 auto 3rem;
    }

    .values {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }

    .value-item {
      background: rgba(156, 34, 68, 0.05);
      border: 1px solid rgba(156, 34, 68, 0.2);
      border-radius: 12px;
      padding: 2rem;
      text-align: center;
      transition: all 0.3s ease;
    }

    .value-item:hover {
      transform: translateY(-5px);
      border-color: var(--primary-color);
      box-shadow: 0 10px 25px rgba(156, 34, 68, 0.2);
    }

    .value-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .value-title {
      color: var(--text-primary);
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .value-description {
      color: var(--text-secondary);
      line-height: 1.6;
    }

    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes counterRotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(-360deg);
      }
    }

    @media (max-width: 768px) {
      .vision-content {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
      }

      .vision-title {
        font-size: 2.5rem;
      }

      .vision-lead {
        font-size: 1.25rem;
      }

      .mission-title {
        font-size: 2rem;
      }

      .vision-circle {
        width: 250px;
        height: 250px;
      }

      .values {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class VisionComponent {
  visionPillars = [
    {
      icon: '🚀',
      title: 'Innovation Leadership',
      description: 'Pioneering breakthrough AI solutions that push the boundaries of what\'s possible'
    },
    {
      icon: '🌍',
      title: 'Global Impact',
      description: 'Creating AI solutions that solve real-world problems and benefit society'
    },
    {
      icon: '🤝',
      title: 'Ethical AI',
      description: 'Developing responsible AI systems that are transparent, fair, and trustworthy'
    }
  ];

  orbitItems = ['🤖', '📊', '☁️', '🧠', '⚡', '🔬'];

  values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'Delivering exceptional quality in every project and exceeding client expectations'
    },
    {
      icon: '🔬',
      title: 'Innovation',
      description: 'Continuously exploring new technologies and methodologies to stay ahead'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'Working closely with clients as partners to achieve shared success'
    },
    {
      icon: '📈',
      title: 'Growth',
      description: 'Fostering continuous learning and development for our team and clients'
    }
  ];
}