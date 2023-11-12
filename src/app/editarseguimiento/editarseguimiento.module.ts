import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarseguimientoPageRoutingModule } from './editarseguimiento-routing.module';

import { EditarseguimientoPage } from './editarseguimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarseguimientoPageRoutingModule
  ],
  declarations: [EditarseguimientoPage]
})
export class EditarseguimientoPageModule {}
