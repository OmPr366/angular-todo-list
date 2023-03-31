import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  todos : Todo[] | undefined;
  constructor() {
    this.todos = [
      {
        sno: 1,
        title: "This is a title2",
        desc: "This is a description2",
        active: true
      },
      {
        sno: 2,
        title: "lorum ipsum dolor sit amet",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl eu nisl. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl eu nisl.",
        active: true
      },
      {
        sno: 3,
        title: "This is a title3",
        desc: "This is a description",
        active: true
      }
    ]
   }


  ngOnInit(): void {

  }

  deleteTodo (todo:Todo){

    const index =  this.todos?.indexOf(todo);

    if (index !== undefined) {
      this.todos?.splice(index,1);
    }


  }

  addTodo(todo:Todo){
    this.todos?.push(todo);
    console.log("Added todo ",this.todos);
  }
}
