import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
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

  constructor(private navCtrl: NavController, private eRef: ElementRef) { 

    addIcons({ caretDown });

  }

  ngOnInit() { }
  
  opcionesDelMenu = [
    { titulo: "Compra", ruta: "/compra" },
    { titulo: "Renta", ruta: "/renta" },
    { titulo: "Videos", ruta: "/videos" },
    { titulo: "Cursos", ruta: "/cursos" }
  ];

  estadoSubmenuUsuario = false;

  irRuta(ruta: string) {
    
    this.navCtrl.navigateForward(ruta, { animated: false });

  }

  cambiarEstadoSubmenu() {

    this.estadoSubmenuUsuario = !this.estadoSubmenuUsuario;

  }

  @HostListener('document:click', ['$event'])
  clickOut(event: any) {

    if (!this.eRef.nativeElement.contains(event.target)) {
    
      this.estadoSubmenuUsuario = false;
    
    }

  }

}
