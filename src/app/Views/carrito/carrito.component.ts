import { Component, OnInit } from '@angular/core';
import { IonIcon, IonPopover, IonList, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
  standalone: true,
  imports: [
    IonPopover,
    IonList, IonItem],
})
export class CarritoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
