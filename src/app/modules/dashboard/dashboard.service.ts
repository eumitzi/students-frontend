import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DiscNoteFin} from '../../shared/components/model/DiscNoteFin';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private notePerAnStudiu: string;

  constructor(private http: HttpClient) {
    this.notePerAnStudiu = 'http://localhost:8085/api/student/noteFinale';
  }

  getRepos(numeStudent: string, prenumeStudent: string): Observable<DiscNoteFin[]> {
    const params = new HttpParams()
      .set('numeStudent', numeStudent)
      .set('prenumeStudent', prenumeStudent)

    return this.http.get<DiscNoteFin[]>(this.notePerAnStudiu, {params});
  }
}
