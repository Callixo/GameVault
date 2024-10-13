import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Tab2PageRoutingModule } from './tab2-routing.module';
import { Tab2Page } from './tab2.page';
import { provideHttpClient } from '@angular/common/http';  // Adicione o provideHttpClient

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab2PageRoutingModule,
  ],
  providers: [provideHttpClient()],  // Adicione o provideHttpClient
  declarations: [Tab2Page]
})
export class Tab2PageModule {}


