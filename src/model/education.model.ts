export class Education {
  institution: string;
  url: string = '';
  area: string = '';
  studyType: string;
  startDate: Date;
  endDate: Date;
  score: number = 0;
  courses: string[] = [];

  constructor(
    studyType: string,
    institution: string,
    startDate: Date,
    endDate: Date
  ) {
    this.studyType = studyType;
    this.institution = institution;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
