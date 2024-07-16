import {Component, inject} from '@angular/core';
import {HousingLocationComponent} from "../housing-location/housing-location.component";
import {HousingLocation} from "../housingLocation";
import {CommonModule} from "@angular/common";
import {HousingService} from "../housing.service";
import {routes} from "../app.routes";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  housingService: HousingService = inject(HousingService);
  housingLocationList: HousingLocation [] = []
  filteredLocationList: HousingLocation[] = [];

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }
}
