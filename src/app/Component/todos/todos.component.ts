import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos: Todo[] | undefined;
  constructor() {
    this.todos = [];
  }

  ngOnInit(): void {
    let todos = localStorage.getItem('todos');
    if (todos === null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(todos);
    }
  }

  deleteTodo(todo: Todo) {
    const index = this.todos?.indexOf(todo);

    if (index !== undefined) {
      this.todos?.splice(index, 1);
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }

  addTodo(todo: Todo) {
    this.todos?.push(todo);
    console.log('Added todo ', this.todos);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  toggleDone(todo: Todo) {
    const index = this.todos?.indexOf(todo) ;
    if (index !== undefined && this.todos?.length) {
      this.todos[index].active =  !this?.todos[index].active;
      localStorage.setItem("todos",JSON.stringify(this.todos));
    }
  }
}
