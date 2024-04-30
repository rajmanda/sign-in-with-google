import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "../dashboard/dashboard.component";

@Component({
    selector: 'app-home',
    standalone: true,
    template: `
    <main>
      <app-dashboard></app-dashboard>
      <span
        style="margin-top: 5px; margin-bottom: 5px; margin-left: 5px; margin-right: 5px;"></span>
      <header class="brand-name">
        <img
          class="brand-logo"
          src="/assets/logo.svg"
          alt="logo"
          aria-hidden="true"
        />
      </header>
    </main>
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
  `,
    styleUrls: ['./home.component.css'],
    imports: [CommonModule, DashboardComponent]
})
export class HomeComponent {}
