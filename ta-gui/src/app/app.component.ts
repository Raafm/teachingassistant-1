import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
   aluno: Aluno = {nome: "Rodrigo", cpf: "000.000.000-00", email: "raafm@cin.ufpe.br"};
}

export class Aluno {
  nome: string;
  cpf: string;
  email: string;
}
