import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Salle} from '../entities/salle.entities';
@Injectable({providedIn:"root"}) //providedIn:"root" permet de rendre accessible cette classe partout dans l'application
export class SallesService{
  private host = environment.host;
  constructor(private http: HttpClient) {
  }
  getSalle(idsalle: number): Observable<Salle>{
    return this.http.get<Salle>(this.host + "/salles/" + idsalle);
  }

  getSalleSigle(sigle: string): Observable<Salle[]>{
    return this.http.get<Salle[]>(this.host + "/salles/sigle=" + sigle);
  }
  deleteSalle(s: Salle): Observable<void>{
    return this.http.delete<void>(this.host + "/salles/" + s.idsalle);
  }
  save(s: Salle): Observable<Salle>{
    return this.http.post<Salle>(this.host + "/salles/", s);
  }
  updateClient(s: Salle): Observable<Salle>{
    return this.http.put<Salle>(this.host + "/salles/" + s.idsalle, s);
  }
}
