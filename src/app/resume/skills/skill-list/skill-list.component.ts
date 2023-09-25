import { Component, Input } from '@angular/core';
import { Skill } from 'src/model/skill.model';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss'],
})
export class SkillListComponent {
  @Input() items!: Skill[];
}
