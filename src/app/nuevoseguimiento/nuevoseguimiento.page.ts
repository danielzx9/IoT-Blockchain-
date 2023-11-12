import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router,ParamMap, Params } from '@angular/router';
import { Seguimiento } from '../../app/seguimiento';

import { SeguimientoService } from './../services/seguimiento.service';

@Component({
  selector: 'app-nuevoseguimiento',
  templateUrl: './nuevoseguimiento.page.html',
  styleUrls: ['./nuevoseguimiento.page.scss'],
})
export class NuevoseguimientoPage implements OnInit {

  nuevoSeguimiento ={}as Seguimiento;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastCtrl: ToastController,
    private nav: NavController,
    private loadingCtroller: LoadingController,
    private seguimientoService : SeguimientoService
  ) { }

  ngOnInit() {
    this.obtenerFechaActual();
  }

  obtenerFechaActual() {

    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); 
    const day = now.getDate().toString().padStart(2, '0'); 
    this.nuevoSeguimiento.fecha = `${year}-${month}-${day}`;
  }

  nuevo(nuevoSeguimiento: any){
    this.mostrarMensaje('Guardando...');
    this.seguimientoService.crearNuevo(this.nuevoSeguimiento).then(()=>{
      this.router.navigateByUrl('tabs/seguimiento');
      this.mostrarMensaje('Seguimiento Registrado');
    }, err => {
      this.mostrarMensaje('Hubo un error: (');
    });
  }

  mostrarMensaje(mensaje: string){
    this.toastCtrl.create({
      message: mensaje,
      duration: 2000
    }).then(toast => toast.present());
  }

}
