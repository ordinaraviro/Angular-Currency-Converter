import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent {
  @Input() public usdRate: number | undefined;
  @Input() public eurRate: number | undefined;
  input1 = 1;
  input2 = 2;
  rate1 = 'UAH';
  rate2 = 'USD';

  rateObj: Record<string, number> = {};

  constructor() {}

  ngOnInit() {
    this.updateRateObj();
  }

  ngOnChanges() {
    this.updateRateObj();
  }

  updateRateObj() {
    this.rateObj = {
      UAH: 1,
      USD: this.usdRate || 0,
      EUR: this.eurRate || 0
    };
  }

  onInputChange(index = 1) {
    index === 1 ?
    this.input2 = +(this.input1 / this.rateObj[this.rate1] * this.rateObj[this.rate2]).toFixed(2):
    this.input1 = +(this.input2 / this.rateObj[this.rate2] * this.rateObj[this.rate1]).toFixed(2);
  }
}
