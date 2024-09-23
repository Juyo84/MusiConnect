import { Component, OnInit } from '@angular/core';
import { IonContent, IonInput, IonSelect, IonSelectOption, IonCard } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
  standalone: true,
  imports: [IonContent,
    HeaderComponent,
    IonInput,
    IonSelect, IonSelectOption,
    IonCard
  ]
})
export class VideosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
