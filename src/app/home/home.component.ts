import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "../dashboard/dashboard.component";
import { HousingLocation} from '../housinglocation';
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import {HousingService} from '../housing.service';

@Component({
    selector: 'app-home',
    standalone: true,
    template: `
    <main>
      <app-dashboard></app-dashboard>
      <span
        style="margin-top: 5px; margin-bottom: 5px; margin-left: 5px; margin-right: 5px;"></span>
      <!-- <header class="brand-name">
        <img
          class="brand-logo"
          src="/assets/logo.svg"
          alt="logo"
          aria-hidden="true"
        />
      </header> -->
    </main>
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
    styleUrls: ['./home.component.css'],
    imports: [CommonModule, DashboardComponent, HousingLocationComponent]
})

export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
