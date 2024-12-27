import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { TodoFormComponent } from './shared/component/todo-form/todo-form.component';
import { TodoListComponent } from './shared/component/todo-list/todo-list.component';
import { stdDashboardComponent } from './shared/component/std-dashboard/std-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    stdDashboardComponent,
    TodoFormComponent,
    TodoListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
