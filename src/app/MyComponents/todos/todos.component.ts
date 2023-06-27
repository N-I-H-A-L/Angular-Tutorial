import { Component } from '@angular/core';
//imported 'Todo' class from Todo.ts of src folder.
import { Todo } from '../../../Todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  //todos is an array of items of datatype 'Todo'.
  todos: Todo[];
  constructor(){
    this.todos = [
      {
        sno: 1,
        title: "this is title",
        desc: "description",
        active: true
      },
      {
        sno: 2,
        title: "this is title 2",
        desc: "description 2",
        active: true
      },
      {
        sno: 3,
        title: "this is title 3",
        desc: "description 3",
        active: true
      },
    ]
  }
}
