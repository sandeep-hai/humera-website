import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent as ContactSectionComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, ContactSectionComponent],
  template: `
    <div class="page-container">
      <div class="page-header">
        <div class="container">
          <h1 class="page-title">Contact Us</h1>
          <p class="page-subtitle">
            Ready to transform your business with AI? Let's start the conversation.
          </p>
        </div>
      </div>
      <app-contact></app-contact>
      
      <section class="contact-cta">
        <div class="container">
          <div class="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>
              Whether you're looking to implement your first AI solution or scale existing capabilities, 
              our team of experts is here to guide you every step of the way.
            </p>
            <div class="cta-features">
              <div class="feature">
                <div class="feature-icon">🚀</div>
                <h3>Free Consultation</h3>
                <p>Get expert advice on your AI strategy with no commitment</p>
              </div>
              <div class="feature">
                <div class="feature-icon">⚡</div>
                <h3>Rapid Prototyping</h3>
                <p>See your ideas come to life with our quick proof-of-concept development</p>
              </div>
              <div class="feature">
                <div class="feature-icon">🎯</div>
                <h3>Tailored Solutions</h3>
                <p>Custom AI solutions designed specifically for your business needs</p>
              </div>
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

    .contact-cta {
      padding: 6rem 0;
      background: var(--bg-secondary);
    }

    .cta-content {
      text-align: center;
    }

    .cta-content h2 {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 1.5rem;
    }

    .cta-content > p {
      font-size: 1.25rem;
      color: var(--text-secondary);
      max-width: 700px;
      margin: 0 auto 3rem;
      line-height: 1.6;
    }

    .cta-features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }

    .feature {
      background: var(--bg-primary);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      padding: 2.5rem;
      transition: all 0.3s ease;
    }

    .feature:hover {
      transform: translateY(-5px);
      border-color: var(--primary-color);
      box-shadow: 0 20px 40px rgba(156, 34, 68, 0.15);
    }

    .feature-icon {
      font-size: 3rem;
      margin-bottom: 1.5rem;
    }

    .feature h3 {
      color: var(--text-primary);
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .feature p {
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

      .cta-content h2 {
        font-size: 2rem;
      }

      .cta-features {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ContactComponent {}