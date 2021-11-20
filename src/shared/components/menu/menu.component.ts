import { Component, Input, OnInit } from '@angular/core';
import { IntrefaceMenu } from '@core/interfaces/intreface-menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() appPages: IntrefaceMenu[];
  constructor() {}

  ngOnInit() {}
}
