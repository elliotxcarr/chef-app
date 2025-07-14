import { Component, inject } from '@angular/core';
import { ChefStore } from '../store/chef.store';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-display-panel',
    imports: [NgFor],
    standalone:true,
    templateUrl: './display-panel.component.html',
    styleUrl: './display-panel.component.css'
})
export class DisplayPanelComponent {
    readonly store = inject(ChefStore);

}
