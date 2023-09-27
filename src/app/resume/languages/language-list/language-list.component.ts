import { Component, Input } from '@angular/core';
import { LanguageModel } from 'src/model/language.model';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.scss'],
})
export class LanguageListComponent {
  @Input() items!: LanguageModel[];
}
