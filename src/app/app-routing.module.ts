import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SallesComponent} from './components/salles/salles.component';
import {CoursComponent} from './components/cours/cours.component';
import {HomeComponent} from './components/home/home.component';
import {NewsalleComponent} from "./components/newsalle/newsalle.component";
import {EditsalleComponent} from "./components/editsalle/editsalle.component";
import {ExamenComponent} from "./components/examen/examen.component";
const routes: Routes = [
  {path: 'salles', component: SallesComponent},
  {path: 'cours', component: CoursComponent},
  {path: '', component: HomeComponent},
  {path:"newSalle",component:NewsalleComponent},
  {path:"editsalle/:idsalle",component:EditsalleComponent},
  {path:"examen",component:ExamenComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
