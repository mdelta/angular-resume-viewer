export class LocationModel {
  address = '';
  postalCode = '';
  city = '';
  countryCode = '';
  region = '';

  constructor(item: unknown) {
    if (!item) throw new Error('No value given');
    if (typeof item !== 'object') throw new Error('No object given');

    if ('address' in item && typeof item.address === 'string') this.address = item.address;
    if ('postalCode' in item && typeof item.postalCode === 'string') this.postalCode = item.postalCode;
    if ('city' in item && typeof item.city === 'string') this.city = item.city;
    if ('countryCode' in item && typeof item.countryCode === 'string')
      this.countryCode = item.countryCode;
    if ('region' in item && typeof item.region === 'string') this.region = item.region;
  }
}
