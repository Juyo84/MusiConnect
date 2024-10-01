import { Component } from '@angular/core';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonButton],
})
export class HomePage {
  constructor(private navCtrl: NavController) { }
  
  ngOnInit() {

    setInterval(() => this.movimientoImagenes(), 3000);
    
  }

  movimientoImagenes(){
    
    const imagenIzquierda = document.getElementById('imagenIzquierda');
    const imagenCentral = document.getElementById('imagenCentral');
    const imagenCambio = document.getElementById('imagenCambio');
    const imagenDerecha = document.getElementById('imagenDerecha');

    if(imagenIzquierda && imagenCentral && imagenDerecha && imagenCambio){
      
      imagenDerecha.id = "imagenCentral";
      imagenCentral.id = "imagenIzquierda";
      imagenIzquierda.id = "imagenCambio";
      imagenCambio.id = "imagenDerecha";

      imagenCambio.setAttribute("src", "https://ionicframework.com/docs/img/demos/avatar.svg");
    
    }

  }

  irRuta(ruta: string){

    this.navCtrl.navigateForward(ruta, { animated: false });

  }

}
