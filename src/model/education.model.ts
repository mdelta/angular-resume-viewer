export class Education {
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

  constructor(item: any) {
    if (item.studyType) this.studyType = item.studyType;
    if (item.institution) this.institution = item.institution;
    if (item.url) this.url = item.url;
    if (item.courses) this.courses = JSON.parse(JSON.stringify(item.courses));

    if (item.startDate) {
      this.startDate = new Date(item.startDate);
    } else {
      this.startDate = new Date();
    }

    if (item.endDate) {
      this.endDate = new Date(item.endDate);
    } else {
      this.endDate = new Date();
    }

    if (item._city) this._city = item._city;
  }
}
