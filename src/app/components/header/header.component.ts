import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public usdRate: number | undefined;
  public eurRate: number | undefined;

  constructor(private http: HttpClient) { }

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
