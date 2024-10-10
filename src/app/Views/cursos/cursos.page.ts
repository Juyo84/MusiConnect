import { Component, OnInit } from '@angular/core';
import { IonContent, IonInput, IonSelect, IonSelectOption, IonCard, IonIcon, IonPopover } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { addCircleOutline, cart } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { CarritoComponent } from '../carrito/carrito.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    HeaderComponent,
    IonInput,
    IonSelect, IonSelectOption,
    IonCard,
    IonIcon,
    CarritoComponent,
    IonPopover
  ]
})
export class CursosPage implements OnInit {

  constructor() {

    addIcons({ addCircleOutline, cart });

   }

  ngOnInit() {
  }

}
