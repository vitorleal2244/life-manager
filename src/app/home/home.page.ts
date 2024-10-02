import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { notifications, telescope } from 'ionicons/icons';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonText, 
  IonCard, 
  IonCardContent, 
  IonCardTitle, 
  IonCardSubtitle, 
  IonCardHeader, 
  IonIcon, 
  IonFooter 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';

register()

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonText, 
    IonCard, 
    IonCardContent, 
    IonCardTitle, 
    IonCardSubtitle, 
    IonCardHeader, 
    IonIcon, 
    IonFooter
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage {
  constructor() {
    addIcons({ notifications, telescope });
  }
}
