import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClientRoutingModule } from "./client-routing.module";
import { ClientComponent } from "./client.component";
import { TaskListModule } from './components/task-list/task-list.module';


@NgModule({
  declarations: [ClientComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    TaskListModule
  ]
})
export class ClientModule { }
