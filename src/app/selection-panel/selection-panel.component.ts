import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ChefStore } from '../store/chef.store';

@Component({
    selector: 'app-selection-panel',
    imports: [NgClass],
    standalone: true,
    templateUrl: './selection-panel.component.html',
    styleUrl: './selection-panel.component.css'
})
export class SelectionPanelComponent {
  readonly store = inject(ChefStore)
}
