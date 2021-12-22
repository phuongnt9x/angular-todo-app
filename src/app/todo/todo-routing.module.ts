import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoCreateComponent} from "./todo-create/todo-create.component";
import {TodoEditComponent} from "./todo-edit/todo-edit.component";
import {TodoComponent} from "./todo.component";

const routes: Routes = [{
  path: 'create',
  component: TodoCreateComponent
},{
  path: 'edit/:id',
  component: TodoEditComponent
},{
  path: "",
  component: TodoComponent
}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
