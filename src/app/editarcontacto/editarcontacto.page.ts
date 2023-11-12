import { Component, OnInit } from '@angular/core';

import { Contacto } from '../../app/contacto';
import { ContactosService } from './../services/contactos.service';
import { NavController, LoadingController, ToastController} from '@ionic/angular';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-editarcontacto',
  templateUrl: './editarcontacto.page.html',
  styleUrls: ['./editarcontacto.page.scss'],
})
export class EditarcontactoPage implements OnInit {

  id: any;
  seleccionado! : Contacto;

  constructor(
    private contactoService: ContactosService,
    private route: ActivatedRoute,
    private nav: NavController,
    private loadingCtroller: LoadingController,
    private router: Router,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.route.params.forEach(async (params: Params) =>{
      (await this.contactoService.getContactoById(params['id'])).subscribe((seleccionado) =>{
        this.id = params['id'];
        this.seleccionado = seleccionado!;
      });
    });
  }

  regresar():void{
    this.router.navigate(['tabs/contactos']);
  }

  editar():void{
    this.contactoService.editarContacto(this.seleccionado,this.id).then(()=> {
      this.mostrarMensaje("contacto actualizado");
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
