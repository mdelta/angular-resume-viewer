import { Component, Input, OnInit } from '@angular/core';
import { SkillLevel } from 'src/model/skill.model';

@Component({
  selector: 'app-skill-level',
  templateUrl: './skill-level.component.html',
  styleUrls: ['./skill-level.component.scss'],
})
export class SkillLevelComponent implements OnInit {
  @Input() level: SkillLevel = SkillLevel.None;
  cssClass = '';

  ngOnInit() {
    switch (this.level) {
      case SkillLevel.None:
        this.cssClass = 'value__none';
        break;
      case SkillLevel.Master:
        this.cssClass = 'value__master';
        break;
    }
  }
}
