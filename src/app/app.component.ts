import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'Currency Converter';
  public usdRate: number = 0;
  public eurRate: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getExchangeRates();
  }

  private getExchangeRates(): void {
    const headers = new HttpHeaders({
      'apikey': 'Tc7nsjUCyV66aVeWmW3QxBq6VIcryero'
    });

    this.http.get<any>('https://api.apilayer.com/exchangerates_data/latest?symbols=USD,EUR&base=UAH', { headers })
      .subscribe(data => {
        this.usdRate = data.rates.USD;
        this.eurRate = data.rates.EUR;
      });
  }
}

