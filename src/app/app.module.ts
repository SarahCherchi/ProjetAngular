import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { HomeComponent } from './components/home/home.component';
import { SallesComponent } from './components/salles/salles.component';
import { CoursComponent } from './components/cours/cours.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NewsalleComponent } from './components/newsalle/newsalle.component';
import { EditsalleComponent } from './components/editsalle/editsalle.component';
import { NewcoursComponent } from './components/newcours/newcours.component';
import { EditcoursComponent } from './components/editcours/editcours.component';
import { ExamenComponent } from './components/examen/examen.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HomeComponent,
    SallesComponent,
    CoursComponent,
    NewsalleComponent,
    EditsalleComponent,
    NewcoursComponent,
    EditcoursComponent,
    ExamenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
