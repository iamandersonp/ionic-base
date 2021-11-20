import { NgModule } from '@angular/core';
import {
  PreloadAllModules,
  RouterModule,
  Routes
} from '@angular/router';

import { LayaoutMenuComponent } from '@shared/layouts/layaout-menu/layaout-menu.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayaoutMenuComponent,
    children: [
      {
        path: 'folder/:id',
        loadChildren: () =>
          import('@pages/folder/folder.module').then(
            (m) => m.FolderPageModule
          )
      },
      {
        path: 'animations',
        loadChildren: () =>
          import(
            '@pages/animations/animations.module'
          ).then((m) => m.AnimationsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
