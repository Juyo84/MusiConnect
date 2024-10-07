import { Component, OnInit } from '@angular/core';
import { IonContent, IonInput, IonSelect, IonSelectOption, IonCard, IonIcon } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { addCircleOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

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
    IonIcon
  ]
})
export class CursosPage implements OnInit {

  constructor() {

    addIcons({ addCircleOutline });

   }

  ngOnInit() {
  }

}
