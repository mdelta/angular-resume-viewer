export class EducationModel {
  institution = '';
  url = '';
  area = '';
  studyType = '';
  startDate: Date;
  endDate: Date;
  score = 0;
  courses: string[] = [];

  // custom types
  _city = '';

  constructor(item: unknown) {
    if (!item) throw new Error('No value given');
    if (typeof item !== 'object') throw new Error('No object given');

    if ('studyType' in item && typeof item.studyType === 'string') this.studyType = item.studyType;

    if ('institution' in item && typeof item.institution === 'string')
      this.institution = item.institution;

    if ('url' in item && typeof item.url === 'string') this.url = item.url;

    try {
      if ('courses' in item) this.courses = JSON.parse(JSON.stringify(item.courses));
    } catch (error) {
      console.error('Error parsing courses:', error);
    }

    if ('startDate' in item && typeof item.startDate === 'string') {
      this.startDate = new Date(item.startDate);
    } else {
      this.startDate = new Date();
    }

    if ('endDate' in item && typeof item.endDate === 'string') {
      this.endDate = new Date(item.endDate);
    } else {
      this.endDate = new Date();
    }

    // custom types
    if ('_city' in item && typeof item._city === 'string') this._city = item._city;
  }
}
