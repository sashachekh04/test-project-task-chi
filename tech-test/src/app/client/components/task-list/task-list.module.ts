import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TaskListComponent } from "./task-list.component";
import { TaskModule } from '../task/task.module';



@NgModule({
  declarations: [TaskListComponent],
  exports: [
    TaskListComponent
  ],
  imports: [
    CommonModule,
    TaskModule
  ]
})
export class TaskListModule { }
