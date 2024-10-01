import { Component, OnInit } from '@angular/core';
import { IonContent, IonInput, IonSelect, IonSelectOption, IonCard } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';

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
    IonCard
  ]
})
export class CursosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
