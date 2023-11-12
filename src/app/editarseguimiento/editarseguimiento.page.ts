import { Component, OnInit } from '@angular/core';

import { Seguimiento } from '../../app/seguimiento';
import { SeguimientoService } from './../services/seguimiento.service';
import { NavController, LoadingController, ToastController} from '@ionic/angular';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
  selector: 'app-editarseguimiento',
  templateUrl: './editarseguimiento.page.html',
  styleUrls: ['./editarseguimiento.page.scss'],
})
export class EditarseguimientoPage implements OnInit {

  id: any;
  seleccionado! : Seguimiento;

  constructor(
    private seguimientoService: SeguimientoService,
    private route: ActivatedRoute,
    private nav: NavController,
    private loadingCtroller: LoadingController,
    private router: Router,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.route.params.forEach(async (params: Params) =>{
      (await this.seguimientoService.getSeguimientoById(params['id'])).subscribe((seleccionado) =>{
        this.id = params['id'];
        this.seleccionado = seleccionado!;
      });
    });
  }

  regresar():void{
    this.router.navigate(['tabs/seguimiento']);
  }

  editar():void{
    this.seguimientoService.editarSeguimiento(this.seleccionado,this.id).then(()=> {
      this.mostrarMensaje("Seguimiento actualizado");
      this.regresar();
    }, err => {
      this.mostrarMensaje('hubo un error:(');
    });
  }

  mostrarMensaje (mesanje: string){
    this.toastCtrl.create({
      message: mesanje,
      duration: 2000
    }).then(toast => toast.present());
  }

}
