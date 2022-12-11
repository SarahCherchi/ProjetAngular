import {Salle} from './salle.entities';
export interface Cours {
  idcours: number;
  code: string;
  intitule: string;
  salle: Salle;
}
