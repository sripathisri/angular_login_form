import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecformComponent } from './recform/recform.component';
import { TempformComponent } from './tempform/tempform.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {  path:'',component:HomeComponent},
  {  path:'tempform',component:TempformComponent},
  {  path:'recform',component:RecformComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
