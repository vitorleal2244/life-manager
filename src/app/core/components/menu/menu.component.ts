import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { home, list } from 'ionicons/icons';
import { IonTabButton, IonIcon, IonTabBar, IonTabs } from '@ionic/angular/standalone'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [IonTabButton, IonIcon, IonTabBar, IonTabs, RouterLink]
})
export class MenuComponent {

  constructor() {
    addIcons({ home, list });
  }

}
