export enum SkillLevel {
  None,
  Beginner,
  Average,
  Advanced,
  Master,
}

export class SkillModel {
  name = '';
  private level = '';
  levelType: SkillLevel = SkillLevel.None;
  keywords: string[] = [];

  constructor(item: unknown) {
    if (!item) throw new Error('No value given');
    if (typeof item !== 'object') throw new Error('No object given');

    if ('name' in item && typeof item.name === 'string') this.name = item.name;
    if ('level' in item && typeof item.level === 'string') this.level = item.level;

    try {
      if ('keywords' in item) this.keywords = JSON.parse(JSON.stringify(item.keywords));
    } catch (error) {
      console.error('Error parsing keywords:', error);
    }

    switch (this.level) {
      case 'Beginner':
        this.levelType = SkillLevel.Beginner;
        break;
      case 'Average':
        this.levelType = SkillLevel.Average;
        break;
      case 'Advanced':
        this.levelType = SkillLevel.Advanced;
        break;
      case 'Master':
        this.levelType = SkillLevel.Master;
        break;
    }
  }
}
