import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Cours} from "../../entities/cours.entities";
import {CoursService} from "../../services/cours.service";

@Component({
  selector: 'app-editcours',
  templateUrl: './editcours.component.html',
  styleUrls: ['./editcours.component.css']
})
export class EditcoursComponent implements OnInit {
  coursFormGroup?: FormGroup;
  submitted=false;
  @Input() cours?:Cours;
  deleted=false;
  constructor(private coursService: CoursService, private fb:
    FormBuilder) {
  }
  ngOnInit(): void {
    this.coursFormGroup = this.fb.group({
      idcours: [this.cours?.idcours],
      code: [this.cours?.code,[Validators.required,Validators.min(1)]],
      intitule: [this.cours?.intitule,[Validators.required]]
    });
  }
  onUpdateCours(): void {
    this.submitted = true;
    if (this.coursFormGroup?.invalid) {
      return;
    }
    let coursmaj:Cours=this.coursFormGroup?.value;
    if(this.cours) {//permet de s'assurer que le cours a bien une valeur et évite les avertissements "possiblement indéfini"
      coursmaj.salle = this.cours.salle; //car le formulaire ne donne une valeur qu'aux champs propres du cours
      this.coursService.updateCours(coursmaj).subscribe({
        next: data => alert('maj ok'),
        error : err => alert(err.headers.get("error"))
      })
    }
  }

  onDeleteCours() {
    let v = confirm('êtes vous sûr de vouloir supprimer ? ');
    if (v) {
      this.coursService.deleteCours(this.coursFormGroup?.value).subscribe(
        data => {
          alert('effacement ok');
          this.deleted=true;
        },
        err => {alert(err.headers.get("error"));
        });
    }
  }
}
