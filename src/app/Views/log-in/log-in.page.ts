import { Component, OnInit } from '@angular/core';
import { IonContent, IonCard, IonButton, IonInput } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonCard,
    IonButton,
    IonInput
  ]
})
export class LogInPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  irRuta(ruta: string){

    this.navCtrl.navigateForward(ruta, { animated: false });

  }

}
