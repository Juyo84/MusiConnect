import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    IonPopover,
    CommonModule
  ]
})
export class CompraPage implements OnInit {

  constructor(private eRef: ElementRef) { 

    addIcons({ cart });

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
