import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Importe o withFetch para habilitar o suporte a fetch

// Firebase Imports
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics'; // Opcional, apenas se for usar Analytics
import { environment } from '../environments/environment'; // Importe a configuração do Firebase do environment.ts

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // Inicialize o Firebase
    AngularFireAuthModule, // Módulo para autenticação
    AngularFireAnalyticsModule, // Módulo opcional para Analytics
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideHttpClient(withFetch()), // Adiciona o HttpClient como um provedor e habilita fetch para SSR
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}




