import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SallesService} from '../../services/salles.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editsalle',
  templateUrl: './editsalle.component.html',
  styleUrls: ['./editsalle.component.css']
})
export class EditsalleComponent implements OnInit {
  salleFormGroup?: FormGroup;
  submitted = false;
  idSalle: number;
  constructor(private salleService: SallesService,private fb:
    FormBuilder,activatedRoute : ActivatedRoute) {
    this.idSalle=activatedRoute.snapshot.params.idsalle;
  }
  ngOnInit(): void {
    this.salleService.getSalle(this.idSalle).subscribe(
      salle =>{this.salleFormGroup = this.fb.group({
        idsalle: [salle.idsalle, Validators.required],
        sigle: [salle.sigle, Validators.required],
        capacite: [salle.capacite, Validators.required]
      })
      });
  }
  onUpdateSalle(): void {
    this.submitted = true;
    if (this.salleFormGroup?.invalid) { return; }

    this.salleService.updateSalle(this.salleFormGroup?.value).subscribe(
      data => {alert('maj ok')},
      err => {alert(err.headers.get("error"));
      });
  }
}

