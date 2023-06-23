import { Component } from '@angular/core';

@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html',
  styleUrls: ['./solicitacao.component.css']
})
export class SolicitacaoComponent {
  prof!: string;
  aluno!: string;
  dt!: string;
  hr!: string;
  lab!: string;


  submitForm(){
    const solicitacao ={
      prof: this.prof,
      aluno: this.aluno,
      dt: this.dt,
      hr: this.hr,
      lab: this.lab,

    }
    console.log(JSON.stringify(solicitacao));
  }

}
//NÃO MEXA NESSA PORRA PELO AMOR DE DEUS