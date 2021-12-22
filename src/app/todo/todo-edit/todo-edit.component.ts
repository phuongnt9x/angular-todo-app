import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../todo.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  id!: number;
  content!: FormGroup;
  constructor(private todoService: TodoService,private activatedRouter: ActivatedRoute) {
    this.activatedRouter.paramMap.subscribe((paramMap: ParamMap)=>{
    this.id= Number(paramMap.get('id'));
    console.log(this.id);
    this.getTodo(this.id);
    })
  }
  ngOnInit(): void {
  }

  getTodo(id: number) {
    return this.todoService.findById(id).subscribe(todo => {
      this.content =  new FormGroup({
        content: new FormControl(todo.content)
      })
      })
  }
  updateTodo(id: number){
    const todox=this.content.value;
    this.todoService.updateTodo(id,todox).subscribe(()=>{
      console.log('OK');
    },error => {
      console.log(error);
    })

  }

}
