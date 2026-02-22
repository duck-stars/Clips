import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp} from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyD0jZxdopJgNeFvt1kYKFhZ4fvXBmAm4Fg",
      authDomain: "clips-f1b06.firebaseapp.com",
      projectId: "clips-f1b06",
      storageBucket: "clips-f1b06.firebasestorage.app",
      messagingSenderId: "372664478718",
      appId: "1:372664478718:web:26fa1a4abbe1ea7e082eaf"
    })),
    provideFirestore(() => getFirestore())
  ]
};
