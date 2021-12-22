import { Component, OnInit } from '@angular/core';
import {Todo} from "../../todo";
import {FormControl} from "@angular/forms";
import {TodoService} from "../../todo.service";

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {
  todos: Todo[]=[];
  content = new FormControl();
  _id =this.todos.length;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }
  createTodo() {
    const value = this.content.value;
    this._id=this.todos.length;
    if (value) {
      const todo: Todo = {
        id: this._id++,
        content: value,
        complete: false
      };
      this.todos.push(todo);
      this.todoService.saveTodo(todo).subscribe(()=>{
        alert('Them thanh cong');
      },error => {
        console.log(error);
      })
      this.content.reset();
    }
  }

}
