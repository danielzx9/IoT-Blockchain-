import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-seleccionarfecha',
  templateUrl: './seleccionarfecha.page.html',
  styleUrls: ['./seleccionarfecha.page.scss'],
})
export class SeleccionarfechaPage  {
  selectedDate: string = '';
  fechaActual: string = '';

  constructor(private navCtrl: NavController) {
    this.selectedDate = new Date().toISOString().split('T')[0];
  }

  ngOnInit() {
    this.obtenerFechaActual();
  }

  obtenerFechaActual() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    this.fechaActual = `${year}-${month}-${day}`;
  }

  

  seleccionarFecha() {
    console.log('Fecha seleccionada:', this.selectedDate);

    // Cierra la página actual y envía la fecha seleccionada de vuelta a la página principal
    this.navCtrl.navigateBack('tabs', {
      state: {
        selectedDate: this.selectedDate,
      },
    });
  }
}
