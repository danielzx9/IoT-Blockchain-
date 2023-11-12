import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionarfechaPageRoutingModule } from './seleccionarfecha-routing.module';

import { SeleccionarfechaPage } from './seleccionarfecha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionarfechaPageRoutingModule
  ],
  declarations: [SeleccionarfechaPage]
})
export class SeleccionarfechaPageModule {}
