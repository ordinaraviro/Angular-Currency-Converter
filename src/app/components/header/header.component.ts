import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() public usdRate: number | undefined;
  @Input() public eurRate: number | undefined;
  @Input() public title: string | undefined;

  ngOnInit(): void {
  }
}
