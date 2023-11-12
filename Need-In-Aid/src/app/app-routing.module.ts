import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FisheriesComponent } from './fisheries/fisheries.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'fisheries', component:FisheriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
