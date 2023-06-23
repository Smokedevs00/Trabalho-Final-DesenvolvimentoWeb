import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitacaoComponent } from './solicitacao/solicitacao.component';
import { ReservaComponent } from './reserva/reserva.component';

const routes: Routes = [
  {path: '', component: SolicitacaoComponent},
  {path: 'reserva', component: ReservaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
