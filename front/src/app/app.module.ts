import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgendamentoService } from './services/agendamento.service';
import { LoginComponent } from './pages/login/login.component';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';
import { CamerasComponent } from './pages/cameras/cameras.component';
import { CreditoComponent } from './pages/credito/credito.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AgendamentoComponent,
    CamerasComponent,
    CreditoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    //SEMPRE O ULTIMO A SER DECLARADO
    AppRoutingModule
  ],
  providers: [
    AgendamentoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
