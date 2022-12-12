import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Cours} from '../entities/cours.entities';
import {Salle} from '../entities/salle.entities';
import {formatDate} from '@angular/common';
@Injectable({providedIn:"root"})
export class CoursService{
  private host = environment.host;
  constructor(private http: HttpClient) {
  }
  deleteCours(c: Cours): Observable<void>{
    return this.http.delete<void>(this.host + "/cours/" + c.idcours);
  }
  save(c: Cours,s: Salle): Observable<Cours>{
    c.salle=s;
    return this.http.post<Cours>(this.host + "/cours/",c);
  }
  updateCours(c: Cours): Observable<Cours>{
    return this.http.put<Cours>(this.host + "/cours/" + c.idcours, c);
  }
  getCoursSalle(idSalle: number) : Observable<Cours[]>{
    return this.http.get<Cours[]>(this.host + "/cours/idsalle=" + idSalle);
  }
}
