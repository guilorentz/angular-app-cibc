import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radio-button-card-identity',
  templateUrl: './radio-button-card-identity.component.html',
  styleUrls: ['./radio-button-card-identity.component.scss']
})
export class RadioButtonCardIdentityComponent {

  @Input() yes: string = '';
  @Input() no: string = '';
  @Input() name: string = '';
  @Input() yesDescription: string = '';
  @Input() noDescription: string = '';

}
