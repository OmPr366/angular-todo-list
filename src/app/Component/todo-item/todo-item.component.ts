import { Component ,EventEmitter,Input , OnInit, Output} from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() todo :  Todo | undefined;
  @Input() index:  Number | undefined ;
  @Output() todoDelete : EventEmitter<Todo> =  new EventEmitter();
  @Output() todoToggleDone:  EventEmitter<Todo> =  new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  onDeleteHandler (todo:Todo|undefined){
    this.todoDelete.emit(todo);
    console.log("Delete button clicked");
  }

  doneHandler(todo:Todo|undefined){
    this.todoToggleDone.emit(todo)
  }

}
