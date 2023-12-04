import { Component, Input } from '@angular/core';
import { LanguageModel } from 'src/model/language.model';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
})
export class LanguagesComponent {
  @Input() items!: LanguageModel[];
}
