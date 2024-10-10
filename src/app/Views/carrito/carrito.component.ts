import { Component, OnInit } from '@angular/core';
import { IonPopover, IonList, IonItem } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';

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

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  irListaCarrito() {

    this.navCtrl.navigateForward('lista-carrito', { animated: false });
  
  }

}
