import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';
import { CamerasComponent } from './pages/cameras/cameras.component';
import { CreditoComponent } from './pages/credito/credito.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'agendamento', component: AgendamentoComponent},
  { path: 'credito', component: CreditoComponent},
  { path: 'cameras', component: CamerasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
