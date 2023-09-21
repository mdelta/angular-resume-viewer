import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-credly',
  templateUrl: './social-credly.component.html',
  styleUrls: ['./social-credly.component.scss'],
})
export class SocialCredlyComponent {
  @Input() url: string = '';
  icon = '';
}
