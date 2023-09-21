import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-social-item',
  templateUrl: './social-item.component.html',
  styleUrls: ['./social-item.component.scss'],
})
export class SocialItemComponent {
  @Input() name: string = '';
  @Input() network: string = '';
  @Input() url: string = '';
  @Input() icon: IconDefinition = faLink;

  title: string = '';

  constructor() {}

  ngOnInit() {
    if (this.name !== '') {
      this.title = `${this.network}, ${this.name}`;
    } else {
      this.title = this.network;
    }
  }
}
