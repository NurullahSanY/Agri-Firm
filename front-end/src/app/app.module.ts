import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FisheriesComponent } from './fisheries/fisheries.component';
import { PlantComponent } from './plant/plant.component';
import { VeterinaryComponent } from './veterinary/veterinary.component';
import { AgricultureComponent } from './agriculture/agriculture.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FisheriesComponent,
    PlantComponent,
    VeterinaryComponent,
    AgricultureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
