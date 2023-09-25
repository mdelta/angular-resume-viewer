import { Component } from '@angular/core';

@Component({
  selector: 'app-flipcard',
  templateUrl: './flipcard.component.html',
  styleUrls: ['./flipcard.component.scss'],
})
export class FlipcardComponent {
  frontVisible = true;

  flipEvent() {
    this.frontVisible = !this.frontVisible;
  }
}
