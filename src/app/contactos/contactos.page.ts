import { Component, OnInit } from '@angular/core';

import { Observable, map } from 'rxjs';
import { Contacto } from '../../app/contacto';
import { ContactosService } from './../services/contactos.service';
import {
  NavController, LoadingController, ToastController,
  ActionSheetController, AlertController
} from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {
   

  contactos$!: Contacto[];
  selectedDate: string = '';
  contactosFiltrados: any[] = [];

  today: string;
  constructor(
    private contactoService: ContactosService,
    private route: ActivatedRoute,
    private nav: NavController,
    private loadingCtroller: LoadingController,
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController,
    private router: Router,
    private toastCtrl: ToastController,
    private modalController: ModalController,
    private navCtrl: NavController,


  ) {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); 
    const day = now.getDate().toString().padStart(2, '0'); 
    this.today = `${year}-${month}-${day}`;

    this.selectedDate = new Date().toISOString().split('T')[0];
  
 
    
  }

  ocultarLabel = true;

  ngOnInit() {
    this.selectedDate = this.obtenerFechaActual();


    this.filtrarContactos();
 
  }

  obtenerFechaActual(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    console.log('Fecha seleccionada2222222222222222:', this.selectedDate);
    return `${year}-${month}-${day}`;
    
  }


  alternarVisibilidadLabel() {
    this.ocultarLabel = !this.ocultarLabel;
  }

  seleccionarFecha() {
    console.log('Fecha seleccionada:', this.selectedDate);
  }
  

  filtrarContactos() {
    if (this.selectedDate && this.contactos$) {

      this.contactosFiltrados = this.contactos$.filter((contacto) => contacto.fecha === this.selectedDate);
    }
  }
  

  async getContactos(): Promise<void> {
    (await this.contactoService.getContactos()).subscribe((contactos) => {
      this.contactos$ = contactos;
    });
  }

  ionViewDidEnter() {
    this.getContactos();
  }


  async selectContacto(contacto: any) {
    let actionSheet = await this.actionSheetCtrl.create({
      header: "que desea hacer",
      buttons: [
        {
          text: "Borrar contacto",
          role: "destructive",
          handler: () => {
            this.borrar(contacto);
          }
        },
        {
          text: "modificar contacto",
          handler: () => {
            this.editar(contacto);
          }
        },
        {
          text: "cancelar",
          role: "cancel",
          handler: () => {
            console.log('cancelado');
          }
        }
      ]
    });
    await actionSheet.present();
  }

  async borrar(contacto: any) {
    const alert = await this.alertCtrl.create({
      header: "borrar!",
      message: "seguro?",
      buttons: [
        {
          text: "si",
          handler: () => {
            this.contactoService.borrarContacto(contacto);
            this.getContactos();
            this.mostrarMensaje("contacto eliminado!");
          }
        },
        {
          text: "no",
          role: "cancel",
          cssClass: "secondary"
        }
      ]
    });
    await alert.present();
  }

  mostrarMensaje(mesanje: string) {
    this.toastCtrl.create({
      message: mesanje,
      duration: 2000
    }).then(toast => toast.present());
  }

  async editar(contacto: any) {
    this.router.navigate(["tabs/editarcontacto", contacto]);
  }

  abrirSeleccionFecha() {
    this.navCtrl.navigateForward('tabs/seleccionarfecha');
  }




}