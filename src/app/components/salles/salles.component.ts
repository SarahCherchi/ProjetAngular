import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SallesService} from '../../services/salles.service';
import {Observable} from 'rxjs';
import {Salle} from '../../entities/salle.entities';

@Component({
  selector: 'app-salles',
  templateUrl: './salles.component.html',
  styleUrls: ['./salles.component.css']
})
export class SallesComponent implements OnInit {

  salles?: Salle; //le ? signifie que la valeur undefinied est acceptée
  constructor(private sallesService: SallesService, private router:
    Router) { }
  ngOnInit(): void { }
  onSearch(value: any) {
    this.sallesService.getSalleSigle(value.sigle).subscribe(
      {
        next: data => {this.salles = data}
      });
  }
  onNewSalle() { } //développé plus tard
  onDelete(s: Salle) {
    let v = confirm('êtes vous sûr de vouloir supprimer ? ');
    if (v) {
      this.sallesService.deleteSalle(s).subscribe(
        {
          next: data => {
            this.onSearch(s); //rafraîchissement de la page actuelle
            //la solution ci-dessous permet de ne pas recharger la liste à partir du backend
            /* const index = this.clients?.indexOf(c, 0); //élement à
           rechercher, position de départ de la recherche
            alert("index = "+index);
            if (!(index === undefined) && index > -1) {
            this.clients?.splice(index, 1);//position de l'élément à
           ôter,nombre d'éléments à ôter
            }*/
          },
          error: err => { alert(err.headers.get("error")); }
        }
      );
    }
  }
  onEdit(s: Salle) { }//développé plus tard

}
