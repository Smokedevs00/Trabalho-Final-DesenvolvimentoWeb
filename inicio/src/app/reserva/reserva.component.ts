import { Component } from '@angular/core';
import { ServerService } from '../server.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent {
  displayedColumns: string[] = ['id', 'professor', 'sala', 'aluno', 'data'];
  hst!: any 

  constructor(private servico: ServerService){
    this.servico.historico().subscribe(ctd=> this.hst=ctd)

  }


}
