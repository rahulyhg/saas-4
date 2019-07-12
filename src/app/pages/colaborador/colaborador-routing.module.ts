import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColaboradorListComponent } from './colaborador-list/colaborador-list.component';
import { ColaboradorFormComponent } from './colaborador-form/colaborador-form.component';

const routes: Routes = [
  { path: '', component: ColaboradorListComponent },
  { path: 'novo', component: ColaboradorFormComponent },
  { path: ':id/editar', component: ColaboradorFormComponent },
  { path: ':id/view', component: ColaboradorFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColaboradorRoutingModule { }
