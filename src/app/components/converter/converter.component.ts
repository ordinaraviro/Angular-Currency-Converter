import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent {
  @Input() public usdRate: number | undefined;
  @Input() public eurRate: number | undefined;
  input1 = 0;
  input2 = 0;
  rate1 = 'UAH';
  rate2 = 'USD';

  public currencies = [
    { value: 'UAH', label: 'UAH', imgSrc: './assets/ukraine.png' },
    { value: 'USD', label: 'USD', imgSrc: './assets/united-states.png' },
    { value: 'EUR', label: 'EUR', imgSrc: './assets/european-union.png' }
  ];

  rateObj: Record<string, number> = {};

  constructor() {}

  ngOnInit(): void {
    this.updateRateObj();
  }

  ngOnChanges(): void {
    this.updateRateObj();
  }

  updateRateObj(): void {
    this.rateObj = {
      UAH: 1,
      USD: this.usdRate || 0,
      EUR: this.eurRate || 0
    };
  }

  onInputChange(index = 1): void {
    index === 1 ?
    this.input2 = +(this.input1 / this.rateObj[this.rate1] * this.rateObj[this.rate2]).toFixed(2):
    this.input1 = +(this.input2 / this.rateObj[this.rate2] * this.rateObj[this.rate1]).toFixed(2);
  }
}
