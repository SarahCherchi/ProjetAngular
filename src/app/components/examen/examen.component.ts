import { Component, OnInit } from '@angular/core';
import {SallesService} from "../../services/salles.service";
import {Router} from "@angular/router";
import {CoursService} from "../../services/cours.service";
import {Cours} from "../../entities/cours.entities";
import {Salle} from "../../entities/salle.entities";

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {
  cours?: Cours[];
  salles?: Salle[];
  intitule:string="";
  constructor(private sallesService: SallesService, private coursService: CoursService) { }

  ngOnInit(): void {
  }
  /*onSearchIntitu(value: any){
    this.coursService.getSalleIntitu(value.intitule).subscribe(
      {
        next :data => this.cours=data,
        error:err => alert("cours introuvable")
      }
    )
  }*/

}
