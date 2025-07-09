import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-selection-panel',
    imports: [NgFor],
    standalone: true,
    templateUrl: './selection-panel.component.html',
    styleUrl: './selection-panel.component.css'
})
export class SelectionPanelComponent {
  items = {
    carbs: ['Rice', 'Potatoes', 'Bread', 'Sweet Potatoes'],
    fruit: ['Oranges', 'Apples', 'Banana', 'Strawberries'],
    veg: ['Peas', 'Carrots', 'Broccoli', 'Cabbage'],
    meat:['Beef', 'Chicken', 'Fish', 'Pork']
  }
}
