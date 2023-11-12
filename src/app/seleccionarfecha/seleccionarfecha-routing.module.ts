import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionarfechaPage } from './seleccionarfecha.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionarfechaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionarfechaPageRoutingModule {}
