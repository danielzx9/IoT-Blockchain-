import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoseguimientoPageRoutingModule } from './nuevoseguimiento-routing.module';

import { NuevoseguimientoPage } from './nuevoseguimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoseguimientoPageRoutingModule
  ],
  declarations: [NuevoseguimientoPage]
})
export class NuevoseguimientoPageModule {}
