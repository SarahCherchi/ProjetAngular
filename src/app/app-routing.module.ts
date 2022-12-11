import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SallesComponent} from './components/salles/salles.component';
import {CoursComponent} from './components/cours/cours.component';
import {HomeComponent} from './components/home/home.component';
const routes: Routes = [
  {path: 'salles', component: SallesComponent},
  {path: 'cours', component: CoursComponent},
  {path: '', component: HomeComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
