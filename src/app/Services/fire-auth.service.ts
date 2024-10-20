import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail, UserCredential, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FireAuthService {

  constructor(private auth: Auth) {}

  // Iniciar sesión con email y contraseña
  login(correo: string, password: string): Promise<UserCredential> {

    return signInWithEmailAndPassword(this.auth, correo, password);

  }

  // Registrar un nuevo usuario
  registro(email: string, password: string): Promise<UserCredential> {

    return createUserWithEmailAndPassword(this.auth, email, password);

  }

  // Iniciar sesión con Google
  logInGoogle(): Promise<UserCredential> {

    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider);

  }

  // Cerrar sesión
  logout(): Promise<void> {

    return signOut(this.auth);

  }

  // Enviar correo de restablecimiento de contraseña
  enviarCorreoRestablecimiento(email: string): Promise<void> {

    return sendPasswordResetEmail(this.auth, email);

  }

  // Obtener UID del usuario actual
  getUid(): string | null {

    const user = this.auth.currentUser;
    return user ? user.uid : null;

  }

  // Obtener estado de autenticación
  stateAuth(callback: (user: any) => void) {

    onAuthStateChanged(this.auth, callback);

  }

}
