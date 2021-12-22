import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {FormControl} from '@angular/forms';
import {TodoService} from "../todo.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();
  _id =this.todos.length;

  constructor(private todoService:TodoService,private router: Router) {
  }

  ngOnInit() {
    this.getAll();


  }
  ngOnChanges(){
    console.log(this._id+`asba`);
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  change() {
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
  getAll(){
    this.todoService.getAll().subscribe( todolist =>
    this.todos=todolist
    )
  }
  deleteTodo(id?: number) {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.router.navigate(['']);
    }, e => {
      console.log(e);
    });
  }
}
