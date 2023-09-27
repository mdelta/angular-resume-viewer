import { Component, Input } from '@angular/core';
import { SkillLevel } from 'src/model/skill.model';

@Component({
  selector: 'app-skill-level',
  templateUrl: './skill-level.component.html',
  styleUrls: ['./skill-level.component.scss'],
})
export class SkillLevelComponent {
  SkillLevel = SkillLevel;
  @Input() level: SkillLevel = SkillLevel.None;
}
