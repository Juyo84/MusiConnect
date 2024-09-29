import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    HeaderComponent
  ]
})
export class InicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
