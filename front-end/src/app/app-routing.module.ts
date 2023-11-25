import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FisheriesComponent } from './fisheries/fisheries.component';
import { PlantComponent } from './plant/plant.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { VeterinaryComponent } from './veterinary/veterinary.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'fisheries', component: FisheriesComponent },
  { path: 'plant', component: PlantComponent },
  { path: 'agriculture', component: AgricultureComponent },
  { path: 'veterinary', component: VeterinaryComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
