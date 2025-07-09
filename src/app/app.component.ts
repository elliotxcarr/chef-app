import { Component } from '@angular/core';
import { SelectionPanelComponent } from "./selection-panel/selection-panel.component";
import { DisplayPanelComponent } from "./display-panel/display-panel.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SelectionPanelComponent, DisplayPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chef-app';
}
