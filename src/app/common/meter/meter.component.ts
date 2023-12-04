import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meter',
  templateUrl: './meter.component.html',
  styleUrls: ['./meter.component.scss'],
})
export class MeterComponent implements OnInit {
  @Input() width = 0;
  @Input() colorClass: 'green' | 'red' | 'orange' | 'blue' = 'blue';

  ngOnInit() {
    if (this.width > 100) this.width = 100;
  }
}
