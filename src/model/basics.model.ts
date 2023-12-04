export class BasicsModel {
  name = '';
  label = '';
  image = '';
  email = '';
  phone = '';
  url = '';
  summary = '';

  constructor(item: unknown) {
    if (!item) throw new Error('No value given');
    if (typeof item !== 'object') throw new Error('No object given');

    if ('name' in item && typeof item.name === 'string') this.name = item.name;
    if ('label' in item && typeof item.label === 'string') this.label = item.label;
    if ('image' in item && typeof item.image === 'string') this.image = item.image;
    if ('email' in item && typeof item.email === 'string') this.email = item.email;
    if ('phone' in item && typeof item.phone === 'string') this.phone = item.phone;
    if ('url' in item && typeof item.url === 'string') this.url = item.url;
    if ('summary' in item && typeof item.summary === 'string') this.summary = item.summary;
  }
}
