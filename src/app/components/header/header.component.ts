import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="header">
      <nav class="nav-container">
        <div class="logo-section">
          <a routerLink="/" class="logo-link">
          <img src="src/assets/Humera_logo.jpg" alt="HumeraAI Logo" class="logo">
          <span class="brand-name">HumeraAI</span>
          </a>
        </div>
        
        <div class="nav-links" [class.active]="isMenuOpen">
          <a routerLink="/" class="nav-link" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMenu()">Home</a>
          <a routerLink="/about" class="nav-link" routerLinkActive="active" (click)="closeMenu()">About Us</a>
          <a routerLink="/services" class="nav-link" routerLinkActive="active" (click)="closeMenu()">Services</a>
          <a routerLink="/vision" class="nav-link" routerLinkActive="active" (click)="closeMenu()">Vision</a>
          <a routerLink="/contact" class="nav-link" routerLinkActive="active" (click)="closeMenu()">Contact</a>
        </div>
        
        <button class="menu-toggle" (click)="toggleMenu()" [class.active]="isMenuOpen">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: rgba(10, 10, 12, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      z-index: 1000;
      transition: all 0.3s ease;
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo-section {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .logo-link {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      text-decoration: none;
      transition: opacity 0.3s ease;
    }

    .logo-link:hover {
      opacity: 0.8;
    }

    .logo {
      width: 40px;
      height: 40px;
      border-radius: 8px;
      object-fit: cover;
    }

    .brand-name {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--primary-color);
    }

    .nav-links {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    .nav-link {
      color: var(--text-secondary);
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
      position: relative;
    }

    .nav-link:hover {
      color: var(--primary-color);
    }

    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--primary-color);
      transition: width 0.3s ease;
    }

    .nav-link:hover::after {
      width: 100%;
    }

    .nav-link.active {
      color: var(--primary-color);
    }

    .nav-link.active::after {
      width: 100%;
    }

    .menu-toggle {
      display: none;
      flex-direction: column;
      gap: 4px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
    }

    .menu-toggle span {
      width: 24px;
      height: 2px;
      background: var(--text-primary);
      transition: all 0.3s ease;
    }

    .menu-toggle.active span:nth-child(1) {
      transform: rotate(45deg) translate(6px, 6px);
    }

    .menu-toggle.active span:nth-child(2) {
      opacity: 0;
    }

    .menu-toggle.active span:nth-child(3) {
      transform: rotate(-45deg) translate(6px, -6px);
    }

    @media (max-width: 768px) {
      .nav-links {
        position: fixed;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--bg-primary);
        flex-direction: column;
        padding: 2rem;
        gap: 1.5rem;
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        border-top: 1px solid var(--border-color);
      }

      .nav-links.active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }

      .menu-toggle {
        display: flex;
      }
    }
  `]
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}