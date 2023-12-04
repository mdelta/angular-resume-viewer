import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlipcardComponent } from './flipcard/flipcard.component';
import { VcardComponent } from './vcard/vcard.component';
import { MeterComponent } from './meter/meter.component';

@NgModule({
  declarations: [MeterComponent, VcardComponent, FlipcardComponent],
  imports: [CommonModule],
  exports: [MeterComponent, VcardComponent, FlipcardComponent],
})
export class MyCommonModule {}
