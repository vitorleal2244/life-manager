import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonText, IonButton, IonModal, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
  imports: [IonHeader, IonToolbar, IonContent, IonTitle, IonList, IonItem, IonLabel, IonText, IonButton, IonModal, IonButtons],
  standalone: true
})
export class TasksPage {
  isModalOpen = false;

  constructor() { }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}
