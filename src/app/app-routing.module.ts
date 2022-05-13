
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'info',
  // },
  // {
  //   path: 'info',
  //   loadChildren: () => import('./info/info.module').then((m) => m.InfoModule),
  // },
  // {
  //   path: 'forecast',
  //   loadChildren: () => import('./body/body.module').then((m) => m.BodyModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
