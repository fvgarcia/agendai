import { Component, OnInit } from '@angular/core';
import { AgendamentoService } from 'src/app/services/agendamento.service';
//import { Observable } from 'rxjs/Observable';
import { Agendamento } from 'src/app/dto/agendamento';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {

  matricula: number;
  senha: string;
  dataInicio: Date;
  dataFim: Date;
  //$retorno: Observable<Agendamento>
  constructor(private service: AgendamentoService) { }

  ngOnInit() {
  }

  submit(){
    console.log('chamou o trubisco')
    //this.$retorno = this.service.submit(this.matricula, this.senha, this.dataInicio, this.dataFim).map(res => {console.log(res)});
    //console.log(this.$retorno);
  }
}
