import { Component, Input } from '@angular/core';
import { LanguageLevel } from 'src/model/language.model';

@Component({
  selector: 'app-language-level',
  templateUrl: './language-level.component.html',
  styleUrls: ['./language-level.component.scss'],
})
export class LanguageLevelComponent {
  LanguageLevel = LanguageLevel;
  @Input() level: LanguageLevel = LanguageLevel.None;
}
