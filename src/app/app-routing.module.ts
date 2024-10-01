import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePage } from './home/home.page';
import { TasksPage } from './tasks/tasks.page';
import { MenuComponent } from './core/components/menu/menu.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: MenuComponent,
        children: [
          {
            path: 'home',
            component: HomePage
          },
          {
            path: 'tasks',
            component: TasksPage
          },
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'home',
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
