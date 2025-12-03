import { Component, inject } from '@angular/core';
import { ChefStore } from '../store/chef.store';
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-display-panel',
    imports: [NgFor,NgIf],
    standalone:true,
    templateUrl: './display-panel.component.html',
    styleUrl: './display-panel.component.css'
})
export class DisplayPanelComponent {
    readonly store = inject(ChefStore);

}
