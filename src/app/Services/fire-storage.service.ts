import { Injectable } from '@angular/core';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FireStorageService {
  
  private storage = getStorage(initializeApp(environment.firebaseConfig));

  constructor() {}

  subirImagen(file: File, path: string, nombre: string): Promise<string> {

    return new Promise((resolve, reject) => {

      const storageRef = ref(this.storage, `${path}/${nombre}`);

      uploadBytes(storageRef, file).then(() => {

        return getDownloadURL(storageRef);

      }).then((downloadURL) => {

        resolve(downloadURL);

      }).catch((error) => {

        reject(error);

      });

    });

  }

}
