import { Component, inject } from '@angular/core';
import { SelectionPanelComponent } from "./selection-panel/selection-panel.component";
import { DisplayPanelComponent } from "./display-panel/display-panel.component";
import { ChefStore } from './store/chef.store';
import { MealGridComponent } from "./meal-grid/meal-grid.component";

@Component({
    selector: 'app-root',
    standalone:true,
    imports: [SelectionPanelComponent, DisplayPanelComponent, MealGridComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chef-app';
  readonly store = inject(ChefStore)
}
