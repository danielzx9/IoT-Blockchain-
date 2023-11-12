import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'contactos',
    loadChildren: () => import('./contactos/contactos.module').then( m => m.ContactosPageModule)
  },
  {
    path: 'nuevocontacto',
    loadChildren: () => import('./nuevocontacto/nuevocontacto.module').then( m => m.NuevocontactoPageModule)
  },
  {
    path: 'editarcontacto/:id',
    loadChildren: () => import('./editarcontacto/editarcontacto.module').then( m => m.EditarcontactoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'seleccionarfecha',
    loadChildren: () => import('./seleccionarfecha/seleccionarfecha.module').then( m => m.SeleccionarfechaPageModule)
  },
  {
    path: 'seguimiento',
    loadChildren: () => import('./seguimiento/seguimiento.module').then( m => m.SeguimientoPageModule)
  },
  {
    path: 'editarseguimiento',
    loadChildren: () => import('./editarseguimiento/editarseguimiento.module').then( m => m.EditarseguimientoPageModule)
  },
  {
    path: 'nuevoseguimiento',
    loadChildren: () => import('./nuevoseguimiento/nuevoseguimiento.module').then( m => m.NuevoseguimientoPageModule)
  },
  {
    path: 'iot',
    loadChildren: () => import('./iot/iot.module').then( m => m.IotPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
