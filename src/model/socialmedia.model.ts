export class SocialMedia {
  network: string = '';
  url: string = '';
  name: string = '';

  iconComponent: '' | 'GitHub' | 'LinkedIn' | 'Xing' | 'Credly' = '';

  constructor(item: any) {
    if (item.network) this.network = item.network;
    if (item.url) this.url = item.url;
    if (item.name) this.url = item.name;

    switch (this.network) {
      case 'GitHub':
        this.iconComponent = 'GitHub';
        break;
      case 'LinkedIn':
        this.iconComponent = 'LinkedIn';
        break;
      case 'Xing':
        this.iconComponent = 'Xing';
        break;
      case 'Credly':
        this.iconComponent = 'Credly';
        break;
    }
  }
}
