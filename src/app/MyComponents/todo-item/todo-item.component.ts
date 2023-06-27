import { Component } from '@angular/core';
import { Todo } from '../../../Todo';
import { Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: Todo;
  onClick(){
    console.log("onClick triggered");
  }
}
