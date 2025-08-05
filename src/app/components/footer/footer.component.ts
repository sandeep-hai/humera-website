import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <div class="brand-section">
              <img src="src/assets/Humera_logo.jpg" alt="HumeraAI Logo" class="footer-logo">
              <span class="brand-name">HumeraAI</span>
            </div>
            <p class="brand-description">
              Empowering businesses with cutting-edge AI and data science solutions. 
              Transform your organization with intelligent automation and data-driven insights.
            </p>
            <div class="contact-info">
              <a href="mailto:info@humera.ai" class="contact-link">
                <span class="contact-icon">📧</span>
                info&#64;humera.ai
              </a>
              <a href="https://humera.ai" class="contact-link">
                <span class="contact-icon">🌐</span>
                humera.ai
              </a>
            </div>
          </div>
          
          <div class="footer-links">
            <div class="link-group">
              <h3 class="link-title">Navigation</h3>
              <ul class="link-list">
                <li><a routerLink="/">Home</a></li>
                <li><a routerLink="/about">About Us</a></li>
                <li><a routerLink="/services">Services</a></li>
                <li><a routerLink="/vision">Vision</a></li>
                <li><a routerLink="/contact">Contact</a></li>
              </ul>
            </div>
            
            <div class="link-group">
              <h3 class="link-title">Technologies</h3>
              <ul class="link-list">
                <li><a routerLink="/about">Data Science</a></li>
                <li><a routerLink="/about">Generative AI</a></li>
                <li><a routerLink="/about">AI Agents</a></li>
                <li><a routerLink="/about">Power BI</a></li>
                <li><a routerLink="/about">Azure Cloud</a></li>
              </ul>
            </div>
            
            <div class="link-group">
              <h3 class="link-title">Services</h3>
              <ul class="link-list">
                <li><a routerLink="/services">Product Development</a></li>
                <li><a routerLink="/services">Consulting</a></li>
                <li><a routerLink="/services">Corporate Training</a></li>
                <li><a routerLink="/about">Competencies</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="copyright">
            <p>&copy; {{ currentYear }} HumeraAI. All rights reserved.</p>
          </div>
          <div class="footer-meta">
            <span class="meta-item">Built with Angular</span>
            <span class="meta-separator">•</span>
            <span class="meta-item">Powered by AI</span>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: var(--bg-secondary);
      border-top: 1px solid var(--border-color);
      padding: 3rem 0 1rem;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .footer-content {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 4rem;
      margin-bottom: 2rem;
    }

    .footer-brand {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .brand-section {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .footer-logo {
      width: 32px;
      height: 32px;
      border-radius: 6px;
      object-fit: cover;
    }

    .brand-name {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--primary-color);
    }

    .brand-description {
      color: var(--text-secondary);
      line-height: 1.6;
      max-width: 300px;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .contact-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--text-secondary);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .contact-link:hover {
      color: var(--primary-color);
    }

    .contact-icon {
      font-size: 1rem;
    }

    .footer-links {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }

    .link-group {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .link-title {
      color: var(--text-primary);
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .link-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .link-list a {
      color: var(--text-secondary);
      text-decoration: none;
      transition: color 0.3s ease;
      font-size: 0.875rem;
    }

    .link-list a:hover {
      color: var(--primary-color);
    }

    .footer-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 2rem;
      border-top: 1px solid var(--border-color);
    }

    .copyright p {
      color: var(--text-secondary);
      font-size: 0.875rem;
      margin: 0;
    }

    .footer-meta {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .meta-item {
      color: var(--text-secondary);
      font-size: 0.875rem;
    }

    .meta-separator {
      color: var(--border-color);
    }

    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .footer-links {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
      }

      .footer-bottom {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }
    }

    @media (max-width: 480px) {
      .footer-links {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}