import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="contact">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Get In Touch</h2>
          <p class="section-subtitle">
            Ready to transform your business with AI? Let's discuss your project and explore the possibilities.
          </p>
        </div>
        
        <div class="contact-content">
          <div class="contact-info">
            <div class="info-item">
              <div class="info-icon">📧</div>
              <div class="info-content">
                <h3>Email Us</h3>
                <a href="mailto:info@humera.ai" class="info-link">info&#64;humera.ai</a>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">🌐</div>
              <div class="info-content">
                <h3>Website</h3>
                <a href="https://humera.ai" class="info-link">humera.ai</a>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">💼</div>
              <div class="info-content">
                <h3>Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
            
            <div class="cta-section">
              <h3>Why Choose HumeraAI?</h3>
              <ul class="benefits-list">
                <li>Expert team with 5+ years of AI/ML experience</li>
                <li>Proven track record with 50+ successful projects</li>
                <li>End-to-end solutions from consulting to deployment</li>
                <li>Cutting-edge technologies and best practices</li>
                <li>Dedicated support and maintenance</li>
              </ul>
            </div>
          </div>
          
          <div class="contact-form-container">
            <form class="contact-form" (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <div class="form-group">
                <label for="name">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  [(ngModel)]="formData.name"
                  required
                  class="form-input"
                  placeholder="Enter your full name">
              </div>
              
              <div class="form-group">
                <label for="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  [(ngModel)]="formData.email"
                  required
                  class="form-input"
                  placeholder="Enter your email address">
              </div>
              
              <div class="form-group">
                <label for="company">Company</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  [(ngModel)]="formData.company"
                  class="form-input"
                  placeholder="Enter your company name">
              </div>
              
              <div class="form-group">
                <label for="service">Service Interest</label>
                <select 
                  id="service" 
                  name="service" 
                  [(ngModel)]="formData.service"
                  class="form-select">
                  <option value="">Select a service</option>
                  <option value="product-development">Product Development</option>
                  <option value="consulting">Consulting Services</option>
                  <option value="training">Corporate Training</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="message">Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  [(ngModel)]="formData.message"
                  required
                  rows="5"
                  class="form-textarea"
                  placeholder="Tell us about your project or requirements"></textarea>
              </div>
              
              <button 
                type="submit" 
                class="submit-btn"
                [disabled]="!contactForm.form.valid">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
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

    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: start;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .info-item {
      display: flex;
      gap: 1rem;
      align-items: flex-start;
      padding: 1.5rem;
      background: var(--bg-secondary);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      transition: all 0.3s ease;
    }

    .info-item:hover {
      border-color: var(--primary-color);
      transform: translateY(-2px);
    }

    .info-icon {
      font-size: 2rem;
      flex-shrink: 0;
    }

    .info-content h3 {
      color: var(--text-primary);
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .info-link {
      color: var(--primary-color);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    .info-link:hover {
      color: #c73659;
    }

    .info-content p {
      color: var(--text-secondary);
      margin: 0;
    }

    .cta-section {
      background: rgba(156, 34, 68, 0.05);
      border: 1px solid rgba(156, 34, 68, 0.2);
      border-radius: 12px;
      padding: 2rem;
      margin-top: 1rem;
    }

    .cta-section h3 {
      color: var(--text-primary);
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .benefits-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .benefits-list li {
      color: var(--text-secondary);
      padding: 0.5rem 0;
      position: relative;
      padding-left: 1.5rem;
    }

    .benefits-list li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--primary-color);
      font-weight: bold;
    }

    .contact-form-container {
      background: var(--bg-secondary);
      border: 1px solid var(--border-color);
      border-radius: 16px;
      padding: 2.5rem;
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .form-group label {
      color: var(--text-primary);
      font-weight: 500;
      font-size: 0.875rem;
    }

    .form-input,
    .form-select,
    .form-textarea {
      padding: 1rem;
      border: 1px solid var(--border-color);
      border-radius: 8px;
      background: var(--bg-primary);
      color: var(--text-primary);
      font-size: 1rem;
      transition: all 0.3s ease;
    }

    .form-input:focus,
    .form-select:focus,
    .form-textarea:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(156, 34, 68, 0.1);
    }

    .form-textarea {
      resize: vertical;
      min-height: 120px;
    }

    .submit-btn {
      padding: 1rem 2rem;
      background: var(--primary-color);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 1rem;
    }

    .submit-btn:hover:not(:disabled) {
      background: #c73659;
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(156, 34, 68, 0.3);
    }

    .submit-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    @media (max-width: 768px) {
      .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .contact-form-container {
        padding: 2rem;
      }
    }
  `]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  };

  onSubmit() {
    if (this.isFormValid()) {
      // In a real application, you would send this data to a backend service
      console.log('Form submitted:', this.formData);
      alert('Thank you for your message! We will get back to you soon.');
      this.resetForm();
    }
  }

  private isFormValid(): boolean {
    return !!(this.formData.name && this.formData.email && this.formData.message);
  }

  private resetForm() {
    this.formData = {
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    };
  }
}