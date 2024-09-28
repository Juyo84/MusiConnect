import { Component, OnInit } from '@angular/core';
import { IonContent, IonCard, IonInput, IonButton } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonCard,
    IonInput,
    IonButton
  ]
})
export class SignUpPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  irRuta(ruta: string){

    this.navCtrl.navigateForward(ruta, { animated: false });

  }

}
