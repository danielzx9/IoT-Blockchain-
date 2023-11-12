import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoseguimientoPage } from './nuevoseguimiento.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoseguimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoseguimientoPageRoutingModule {}
