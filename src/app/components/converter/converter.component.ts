import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent {
  @Input() public usdRate: number | undefined;
  @Input() public eurRate: number | undefined;
}
