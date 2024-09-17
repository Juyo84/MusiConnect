import { Component, OnInit } from '@angular/core';
import { IonHeader, IonRow, IonCol, IonPopover, IonContent, IonList, IonListHeader, IonItem, IonIcon } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { caretDown } from 'ionicons/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonRow, IonCol,
    IonPopover,
    IonList, IonListHeader, IonItem,
    IonIcon],
})
export class HeaderComponent  implements OnInit {

  constructor(private router: Router, private navCtrl: NavController) { 

    addIcons({ caretDown });

  }

  ngOnInit() { }
  
  opcionesDelMenu = [
    { titulo: "Home", ruta: "/home" },
    { titulo: "Compra", ruta: "/compra" },
    { titulo: "Renta", ruta: "/renta" },
    { titulo: "Videos", ruta: "/videos" },
    { titulo: "Cursos", ruta: "/cursos" }
  ];

  onSegmentChanged(opcion: any) {
    
    this.navCtrl.navigateForward(opcion.ruta, { animated: false });
    //this.router.navigate([opcion.ruta]);

  }

}
