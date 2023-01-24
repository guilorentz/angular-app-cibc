import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radio-button-card',
  templateUrl: './radio-button-card.component.html',
  styleUrls: ['./radio-button-card.component.scss']
})
export class RadioButtonCardComponent {

  @Input() yes: string = '';
  @Input() no: string = '';
  @Input() name: string = '';

}
