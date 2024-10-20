import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { IonContent, IonInput, IonSelect, IonSelectOption, IonCard, IonIcon, IonPopover } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
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
    CommonModule,
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

  constructor(private eRef: ElementRef) {

    addIcons({ addCircleOutline, cart });

   }

  ngOnInit() {
  }

  estadoCarrito = false;

  cambiarEstadoCarrito() {

    this.estadoCarrito = !this.estadoCarrito;

  }

  @HostListener('document:click', ['$event'])
  clickOut(event: any) {

    if (!this.eRef.nativeElement.contains(event.target)) {
    
      this.estadoCarrito = false;
    
    }

  }

}
