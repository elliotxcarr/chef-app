import { Component, computed, inject } from '@angular/core';
import { ChefStore } from '../store/chef.store';
import { getMealIngredients } from '../shared/utilities';

@Component({
    selector: 'app-display-panel',
    imports: [],
    standalone:true,
    templateUrl: './display-panel.component.html',
    styleUrl: './display-panel.component.css'
})
export class DisplayPanelComponent {
    readonly store = inject(ChefStore);
    ingredients = computed(() => getMealIngredients(this.store.displayMeal())) 
}
