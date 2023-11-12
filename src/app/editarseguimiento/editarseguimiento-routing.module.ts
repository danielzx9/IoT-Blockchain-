import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarseguimientoPage } from './editarseguimiento.page';

const routes: Routes = [
  {
    path: '',
    component: EditarseguimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarseguimientoPageRoutingModule {}
