import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColaboradorListComponent } from './colaborador-list/colaborador-list.component';
import { ColaboradorFormComponent } from './colaborador-form/colaborador-form.component';
import { AuthGuard } from 'src/app/core/auth/_guards/auth.guard';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: ColaboradorListComponent },
      { path: 'novo', component: ColaboradorFormComponent, },
      { path: ':id/editar', component: ColaboradorFormComponent },
      { path: ':id/view', component: ColaboradorFormComponent },
      { path: '**', component: ColaboradorListComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColaboradorRoutingModule { }
