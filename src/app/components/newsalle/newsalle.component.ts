import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SallesService} from '../../services/salles.service';
@Component({
  selector: 'app-newsalle',
  templateUrl: './newsalle.component.html',
  styleUrls: ['./newsalle.component.css']
})
export class NewsalleComponent implements OnInit {
  salleFormGroup?: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private salleService:
    SallesService) {
  }
  ngOnInit() : void {
    this.salleFormGroup = this.fb.group({
      sigle : ['', Validators.required],
      capacite : ['', Validators.required],
    });
  }

  onSaveSalle() {
    this.submitted=true;
    if(this.salleFormGroup?.invalid) return;
    this.salleService.save(this.salleFormGroup?.value).subscribe({
      next :  data=>{alert('sauvegarde ok');alert("n° de la salle = "+data.idsalle)},
      error:  err => alert(err.headers.get("error"))
    });
  }
}
