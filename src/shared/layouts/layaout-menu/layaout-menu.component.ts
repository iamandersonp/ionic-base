import { Component, OnInit } from '@angular/core';
import { IntrefaceMenu } from '@core/interfaces/intreface-menu';

@Component({
  selector: 'app-layaout-menu',
  templateUrl: './layaout-menu.component.html',
  styleUrls: ['./layaout-menu.component.scss']
})
export class LayaoutMenuComponent implements OnInit {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    {
      title: 'Anmations',
      url: '/animations',
      icon: 'reload'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
