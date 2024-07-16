import {Component, Input} from '@angular/core';
import {Info} from "./info";

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {

  @Input() info!: Info

}
