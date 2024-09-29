import { Component, OnInit } from '@angular/core';
import { IonContent, IonCard, IonIcon } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { addIcons } from 'ionicons';
import { reload } from 'ionicons/icons';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    HeaderComponent,
    IonCard,
    IonIcon
  ]
})
export class PerfilPage implements OnInit {

  constructor() { 

    addIcons({ reload });

  }

  ngOnInit() {
  }

}
