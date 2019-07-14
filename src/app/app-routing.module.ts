import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { AuthGuard } from './core/auth/_guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: 'colaborador', loadChildren: './pages/colaborador/colaborador.module#ColaboradorModule', canActivate: [AuthGuard] }
    ]
  },
  {
    path: 'auth', loadChildren: './pages/authentication/authentication.module#AuthenticationModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
