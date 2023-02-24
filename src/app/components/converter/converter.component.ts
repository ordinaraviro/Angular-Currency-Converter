import { Component } from '@angular/core';
import './converter.component.scss';

@Component({
  selector: 'app-currency-converter',
  styleUrls: ['./converter.component.scss'],
  template: `
    <div>
      <h2>Currency Converter</h2>
      <div>
        <input type="number" [(ngModel)]="value1" (input)="convert()" />
        <select [(ngModel)]="currency1" (change)="convert()">
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
      <div>
        <input type="number" [value]="value2" disabled />
        <select [(ngModel)]="currency2" (change)="convert()">
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    </div>
  `
})
export class CurrencyConverterComponent {
  value1 = 1;
  value2 = 0;
  currency1 = 'UAH';
  currency2 = 'USD';
  rate1 = 1;
  rate2 = 1;

  convert() {
    // Get rates for currency1 and currency2
    fetch(`https://api.apilayer.com/exchangerates_data/latest?symbols=${this.currency1},${this.currency2}&base=UAH`, {
      method: 'GET',
      redirect: 'follow',
      headers: {"apikey": "Tc7nsjUCyV66aVeWmW3QxBq6VIcryero"}
    })
    .then(response => response.json())
    .then(result => {
      this.rate1 = result.rates[this.currency1];
      this.rate2 = result.rates[this.currency2];
      this.value2 = +((this.value1 * this.rate1 / this.rate2).toFixed(2));
    })
    .catch(error => console.log('error', error));
  }
}
