import { Component, OnInit } from '@angular/core';

import { Observable, map } from 'rxjs';
import { Seguimiento } from '../../app/seguimiento';
import { SeguimientoService } from './../services/seguimiento.service';
import {
  NavController, LoadingController, ToastController,
  ActionSheetController, AlertController
} from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contactos',
  templateUrl: './seguimiento.page.html',
  styleUrls: ['./seguimiento.page.scss'],
})
export class SeguimientoPage implements OnInit {

  seguimientos$!: Seguimiento[];

  constructor(
    private seguimientoService: SeguimientoService,
    private route: ActivatedRoute,
    private nav: NavController,
    private loadingCtroller: LoadingController,
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController,
    private router: Router,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  async getSeguimientos(): Promise<void> {
    (await this.seguimientoService.getSeguimientos()).subscribe((seguimientos) => {
      this.seguimientos$ = seguimientos;
    });
  }

  ionViewDidEnter() {
    this.getSeguimientos();
  }


  async selectSeguimiento(seguimiento: any) {
    let actionSheet = await this.actionSheetCtrl.create({
      header: "que desea hacer",
      buttons: [
        {
          text: "Borrar seguimiento",
          role: "destructive",
          handler: () => {
            this.borrar(seguimiento);
          }
        },
        {
          text: "modificar seguimiento",
          handler: () => {
            this.editar(seguimiento);
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

  async borrar(seguimiento: any) {
    const alert = await this.alertCtrl.create({
      header: "borrar!",
      message: "seguro?",
      buttons: [
        {
          text: "si",
          handler: () => {
            this.seguimientoService.borrarSeguimiento(seguimiento);
            this.getSeguimientos();
            this.mostrarMensaje("seguimiento eliminado!");
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

  calcularIMC(peso: string, altura: string): number {
    const pesoNumber = parseFloat(peso);
    const alturaNumber = parseFloat(altura);

    if (!isNaN(pesoNumber) && !isNaN(alturaNumber) && alturaNumber > 0) {
      return pesoNumber / (alturaNumber * alturaNumber);
    } else {
      return 0;  
    }
  }

  determinarEstadoIMC(imc: number): string {
    if (imc < 18.5) {
      return 'Bajo peso';
    } else if (imc >= 18.5 && imc < 25) {
      return 'Peso saludable';
    } else if (imc >= 25 && imc < 30) {
      return 'Sobrepeso';
    } else {
      return 'Obesidad';
    }
  }

  async editar(seguimiento: any) {
    this.router.navigate(["tabs/editarseguimiento", seguimiento]);
  }
}