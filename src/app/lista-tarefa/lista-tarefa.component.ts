import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-tarefa',
  templateUrl: './lista-tarefa.component.html',
  styleUrls: ['./lista-tarefa.component.css']
})
export class ListaTarefaComponent {

tarefa1 : tarefa = new tarefa("Beber Água")
tarefa2 : tarefa = new tarefa("Lavar louça")
tarefa3 : tarefa = new tarefa("Ir pra faculdade")
tarefa4 : tarefa = new tarefa("Comer")
tarefa5 : tarefa = new tarefa("Estudar")

tarefas:Array<tarefa> = [this.tarefa1, this.tarefa2, this.tarefa3, this.tarefa4, this.tarefa5]

realizado(tarefa : tarefa){
  tarefa.concluido ? tarefa.concluido = false : tarefa.concluido = true
}

  }
  class tarefa{
    descricao : string = ""
    concluido : boolean = false

    constructor (descricao : string){
      this.descricao = descricao
    }

  }
