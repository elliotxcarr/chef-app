import { Component, inject } from '@angular/core';
import { ChefStore } from '../store/chef.store';
import { SpinnerComponent } from "../shared/spinner/spinner.component";

@Component({
  selector: 'app-meal-grid',
  imports: [SpinnerComponent],
  templateUrl: './meal-grid.component.html',
  styleUrl: './meal-grid.component.css',
})
export class MealGridComponent {
  readonly store = inject(ChefStore);
  loaded = 0

  thumbLoaded() {
    this.loaded++
    if(this.loaded > 300){
      this.store.setLoading(false)
    }
  }
}
