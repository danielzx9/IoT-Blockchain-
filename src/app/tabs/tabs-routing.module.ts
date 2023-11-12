import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'contactos',
        loadChildren: () => import('../contactos/contactos.module').then(m => m.ContactosPageModule)
      },
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      
      {
        path: 'nuevocontacto',
        loadChildren: () => import('../nuevocontacto/nuevocontacto.module').then(m => m.NuevocontactoPageModule)
      },
      {
        path: 'editarcontacto/:id',
        loadChildren: () => import('../editarcontacto/editarcontacto.module').then(m => m.EditarcontactoPageModule)
      },

      {
        path: 'seleccionarfecha',
        loadChildren: () => import('../seleccionarfecha/seleccionarfecha.module').then(m => m.SeleccionarfechaPageModule)
      },
      {
        path: 'seguimiento',
        loadChildren: () => import('../seguimiento/seguimiento.module').then( m => m.SeguimientoPageModule)
      },
      {
        path: 'editarseguimiento/:id',
        loadChildren: () => import('../editarseguimiento/editarseguimiento.module').then( m => m.EditarseguimientoPageModule)
      },
      {
        path: 'nuevoseguimiento',
        loadChildren: () => import('../nuevoseguimiento/nuevoseguimiento.module').then( m => m.NuevoseguimientoPageModule)
      },
      {
        path: 'iot',
        loadChildren: () => import('../iot/iot.module').then( m => m.IotPageModule)
      },

      {
        path: '',
        redirectTo: '/tabs/iot',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/iot',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
