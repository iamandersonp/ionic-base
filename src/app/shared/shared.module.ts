import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { LayaoutMenuComponent } from './layouts/layaout-menu/layaout-menu.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    LayaoutMenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    LayaoutMenuComponent
  ]
})
export class SharedModule {}
