import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
  imports: [IonHeader, IonToolbar, IonContent, IonTitle],
  standalone: true
})
export class TasksPage {

  constructor() { }

}
