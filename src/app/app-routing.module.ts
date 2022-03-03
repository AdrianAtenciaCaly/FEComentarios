import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEditarComentarioComponent } from './components/agregar-editar-comentario/agregar-editar-comentario.component';
import { ListComentariosComponent } from './components/list-comentarios/list-comentarios.component';
import { VerComentarioComponent } from './components/ver-comentario/ver-comentario.component';

const routes: Routes = [
  {path: '', component : ListComentariosComponent},//cuando ruta sea vacia renderiza en componente
  {path: 'agregar', component:AgregarEditarComentarioComponent},// cuando la ruta sea agregar se renderiza el componente de agregar
  {path: 'editar/:id', component:AgregarEditarComentarioComponent},//para editar
  {path: 'ver/:id', component: VerComentarioComponent},
  {path: '**', redirectTo: '/' ,pathMatch: 'full'}// cuando no se reconoce una ruta difinida, esta ruta siempre va al final
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
