import { Component, OnInit } from '@angular/core';
import { IonContent, IonInput, IonSelect, IonSelectOption, IonCol, IonCard, IonCardContent, IonRow, IonIcon, IonPopover } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { addIcons } from 'ionicons';
import { cart } from 'ionicons/icons';
import { CarritoComponent } from '../carrito/carrito.component';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.page.html',
  styleUrls: ['./compra.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    HeaderComponent,
    IonInput,
    IonSelect, IonSelectOption,
    IonCol, IonRow,
    IonCard, IonCardContent,
    IonIcon,
    CarritoComponent,
    IonPopover
  ]
})
export class CompraPage implements OnInit {

  constructor() { 

    addIcons({ cart });

  }

  ngOnInit() {
  }

}
