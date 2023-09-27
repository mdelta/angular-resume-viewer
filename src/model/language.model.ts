export enum LanguageLevel {
  None,
  Fluent,
  NativeSpeaker,
}

export class LanguageModel {
  language = '';
  private fluency = '';
  levelType: LanguageLevel = LanguageLevel.None;

  constructor(item: unknown) {
    if (!item) throw new Error('No value given');
    if (typeof item !== 'object') throw new Error('No object given');

    if ('language' in item && typeof item.language === 'string') this.language = item.language;
    if ('fluency' in item && typeof item.fluency === 'string') this.fluency = item.fluency;

    switch (this.fluency) {
      case 'Fluent':
        this.levelType = LanguageLevel.Fluent;
        break;
      case 'Native speaker':
        this.levelType = LanguageLevel.NativeSpeaker;
        break;
    }
  }
}
