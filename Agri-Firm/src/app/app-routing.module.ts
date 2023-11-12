import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FisheriesComponent } from './fisheries/fisheries.component';
import { PlantComponent } from './plant/plant.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { VeterinaryComponent } from './veterinary/veterinary.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'fisheries', component:FisheriesComponent},
  {path: 'plant', component:PlantComponent},
  {path: 'agriculture', component:AgricultureComponent},
  {path: 'veterinary', component:VeterinaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
