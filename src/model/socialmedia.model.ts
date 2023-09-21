export class Education {
  network: string = '';
  url: string = '';
  name: string = '';

  icon: string = '';
  iconProvider: '' | 'FontAwesome' | 'Material' = '';

  constructor(item: any) {
    if (item.network) this.network = item.network;
    if (item.url) this.url = item.url;
    if (item.name) this.url = item.name;

    switch (this.name) {
      case 'GitHub':
        this.icon = 'fa-github';
        this.iconProvider = 'FontAwesome';
        break;
    }
  }
}
