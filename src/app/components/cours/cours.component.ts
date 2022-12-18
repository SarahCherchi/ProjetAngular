import { Component, OnInit } from '@angular/core';
import {Cours} from "../../entities/cours.entities";
import {CoursService} from "../../services/cours.service";

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {
  cours: Cours|null = null;
  idcours:number=0;
  constructor(private coursService: CoursService) { }

  ngOnInit(): void {
  }

  onSearch(){
    this.cours=null;
    this.coursService.search(this.idcours).subscribe(
      {
        next :data => this.cours=data,
        error:err => alert("cours introuvable")
      }

    )
  }

}
