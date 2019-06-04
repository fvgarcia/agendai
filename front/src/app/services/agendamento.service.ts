import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
import { Agendamento } from '../dto/agendamento';

@Injectable()
export class AgendamentoService {

  host = 'http://localhost:3000/';
  agendamento = 'agenda';

  constructor(private http: HttpClient) { }

  /* submit(matricula: number, senha: string, dataInicio: Date, dataFim: Date): Observable<Agendamento> {
    return this.http.get<Agendamento>(this.host + this.agendamento);
  } */
}
