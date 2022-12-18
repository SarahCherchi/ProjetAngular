import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CoursService} from "../../services/cours.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Cours} from "../../entities/cours.entities";

@Component({
  selector: 'app-newcours',
  templateUrl: './newcours.component.html',
  styleUrls: ['./newcours.component.css']
})
export class NewcoursComponent implements OnInit {
  @Input()salact?:FormGroup;
  @Output() newCours = new EventEmitter<Cours>();
  coursFormGroup?: FormGroup;
  submitted = false;
  cr?:Cours;
  constructor(private fb: FormBuilder, private coursService:
    CoursService) { }
  ngOnInit(): void {
    this.coursFormGroup = this.fb.group({
      code : [''],
      intitule:[''],
    });
  }
  onSaveCours(): void {
    this.submitted = true;

    this.coursService.save(this.coursFormGroup?.value,this.salact?.value).subscribe({
      next : data => {alert('sauvegarde ok');this.cr=data;this.newCours.emit(data) },
      error: err => alert(err.headers.get("error"))
    });
  }
}

