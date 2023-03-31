import { Component } from '@angular/core';
// import { Todo } from 'Component/todos/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'angular-todo-list';
  constructor() {
    setTimeout(() => {
      this.title = 'Changed Angular Todo List';
    }, 2000);
  }


}
