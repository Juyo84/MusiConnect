import { Component, OnInit } from '@angular/core';
import { IonContent} from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.page.html',
  styleUrls: ['./compra.page.scss'],
  standalone: true,
  imports: [IonContent, HeaderComponent]
})
export class CompraPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
