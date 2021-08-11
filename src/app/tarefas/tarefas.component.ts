import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../tarefa';
import { TAREFAS } from '../mock-tarefas';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {
  tarefas = TAREFAS;
  selectedTarefa?: Tarefa;
  onSelect(tarefa: Tarefa): void {
  this.selectedTarefa = tarefa;
}
  

  constructor() {
    
   }

  ngOnInit(): void {
    
  }

}
