import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bullet-text',
  templateUrl: './bullet-text.component.html',
  styleUrls: ['./bullet-text.component.scss']
})
export class BulletTextComponent {

  @Input() title: string = '';
  @Input() text1: string = '';
  @Input() text2: string = '';
}
