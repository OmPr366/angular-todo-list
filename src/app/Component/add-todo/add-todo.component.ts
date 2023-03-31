import { Component, Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title: string = '';
  desc : string = '';

  @Output () addTodo :  EventEmitter<Todo> =  new EventEmitter();





  onSubmit = (event: any) => {
    event.preventDefault();
    const newTodo = {
      title: this.title,
      desc: this.desc,
      active: true,
      sno:8
    }
    this.addTodo.emit(newTodo);
    // this.title = '';
    console.log(newTodo);


  }


}
