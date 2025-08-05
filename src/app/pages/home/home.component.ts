import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { ServicesComponent } from '../../components/services/services.component';
import { CompetenciesComponent } from '../../components/competencies/competencies.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    CompetenciesComponent
  ],
  template: `
    <div class="home-page">
      <app-hero></app-hero>
      <section class="preview-sections">
        <app-about></app-about>
        <app-services></app-services>
        <app-competencies></app-competencies>
      </section>
    </div>
  `,
  styles: [`
    .home-page {
      min-height: 100vh;
    }

    .preview-sections {
      background: var(--bg-primary);
    }
  `]
})
export class HomeComponent {}