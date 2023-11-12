import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router,ParamMap, Params } from '@angular/router';
import { Contacto } from '../../app/contacto';

import { ContactosService } from './../services/contactos.service';

@Component({
  selector: 'app-nuevocontacto',
  templateUrl: './nuevocontacto.page.html',
  styleUrls: ['./nuevocontacto.page.scss'],
})
export class NuevocontactoPage implements OnInit {

  nuevoContacto ={
    fecha: '',
  }as Contacto;
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastCtrl: ToastController,
    private nav: NavController,
    private loadingCtroller: LoadingController,
    private contactosService : ContactosService
  ) { }

  ngOnInit() {
    this.obtenerFechaActual();
  }

  obtenerFechaActual() {

    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); 
    const day = now.getDate().toString().padStart(2, '0'); 
    this.nuevoContacto.fecha = `${year}-${month}-${day}`;
  }

  nuevo(nuevoContacto: any){
    this.mostrarMensaje('Guardando...');
    this.contactosService.crearNuevo(this.nuevoContacto).then(()=>{
      this.router.navigateByUrl('tabs/contactos');
      this.mostrarMensaje('Contacto Registrado');
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
