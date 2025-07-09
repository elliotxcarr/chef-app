

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
  items = [
    {
      category: 'carbs',
      label: 'Carbohydrates',
      foods: ['Rice', 'Potatoes', 'Bread', 'Sweet Potatoes']
    },
    {
      category: 'fruit',
      label: 'Fruits',
      foods: ['Oranges', 'Apples', 'Banana', 'Strawberries']
    },
    {
      category: 'veg',
      label: 'Vegetables',
      foods: ['Peas', 'Carrots', 'Broccoli', 'Cabbage']
    },
    {
      category: 'meat',
      label: 'Meats & Protein',
      foods: ['Beef', 'Chicken', 'Fish', 'Pork']
    }
  ];

  categories = Object.keys(this.items)
}
