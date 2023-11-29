export class WorkModel {
  name = '';
  location = '';
  description = '';
  position = '';
  url = '';
  startDate: Date;
  endDate: Date;
  summary = '';
  highlights: string[] = [];

  constructor(item: unknown) {
    if (!item) throw new Error('No value given');
    if (typeof item !== 'object') throw new Error('No object given');

    if ('name' in item && typeof item.name === 'string') this.name = item.name;
    if ('location' in item && typeof item.location === 'string') this.location = item.location;
    if ('description' in item && typeof item.description === 'string')
      this.description = item.description;
    if ('position' in item && typeof item.position === 'string') this.position = item.position;
    if ('url' in item && typeof item.url === 'string') this.url = item.url;
    if ('summary' in item && typeof item.summary === 'string') this.summary = item.summary;

    try {
      if ('highlights' in item) this.highlights = JSON.parse(JSON.stringify(item.highlights));
    } catch (error) {
      console.error('Error parsing highlights:', error);
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
  }
}
