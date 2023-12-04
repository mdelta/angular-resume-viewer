import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-social-item',
  templateUrl: './social-item.component.html',
  styleUrls: ['./social-item.component.scss'],
})
export class SocialItemComponent implements OnInit {
  @Input() name = '';
  @Input() network = '';
  @Input() url = '';
  @Input() icon: IconDefinition = faLink;

  title = '';
  ngOnInit() {
    if (this.name !== '') {
      this.title = `${this.network}, ${this.name}`;
    } else {
      this.title = this.network;
    }
  }
}
