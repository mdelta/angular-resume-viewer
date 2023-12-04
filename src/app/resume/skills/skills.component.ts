import { Component, Input } from '@angular/core';
import { SkillModel } from 'src/model/skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  @Input() items!: SkillModel[];
}
