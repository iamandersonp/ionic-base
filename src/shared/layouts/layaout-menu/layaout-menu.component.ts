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
      title: 'Outbox',
      url: '/folder/Outbox',
      icon: 'paper-plane'
    },
    {
      title: 'Favorites',
      url: '/folder/Favorites',
      icon: 'heart'
    },
    {
      title: 'Archived',
      url: '/folder/Archived',
      icon: 'archive'
    },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' }
  ];

  constructor() {}

  ngOnInit() {}
}
