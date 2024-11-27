import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddOrganismoComponent } from './components/add-organismo/add-organismo.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { EditOrganismoComponent } from './components/edit-organismo/edit-organismo.component';
import {OrganismoComponent} from './components/organismo/organismo.component'
export const routes: Routes = [
  { path: 'usuario', component: UsersComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'editar-usuario/:id_usuario', component: EditUserComponent },
  { path: 'editar-organismo/:id_organismo', component: EditOrganismoComponent },
  { path: 'contenido', component: ContenidoComponent },
  { path: 'browser/organismo', component: OrganismoComponent},
  { path: 'agregar-usuario', component: AddUserComponent },
  { path: 'agregar-organismo', component: AddOrganismoComponent },
  { path: 'regresar', component: UsersComponent },
];
