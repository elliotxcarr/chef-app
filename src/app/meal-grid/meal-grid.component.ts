import { Component, inject } from '@angular/core';
import { ChefStore } from '../store/chef.store';

@Component({
  selector: 'app-meal-grid',
  imports: [],
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
