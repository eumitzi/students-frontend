import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {NoteStudDisc} from '../../shared/components/model/noteStudDisc';
import {Observable} from 'rxjs';
import {NotePerDisc} from '../../shared/components/model/notePerDisc';
import {NoteStdPerDisc} from '../../shared/components/model/noteStdPerDisc';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  private noteStudDiscUrl: string;

  constructor(private http: HttpClient) {
    // this.noteStudDiscUrl = 'http://localhost:8085/api/student/note/idDisciplina/str';
    this.noteStudDiscUrl = 'http://localhost:8085/api/student/testp';
  }
  getRepos(numeStudent: string, prenumeStudent: string, numeDisciplina: string): Observable<NotePerDisc[]> {
  let params = new HttpParams()
    .set('numeStudent', numeStudent)
    .set('prenumeStudent', prenumeStudent)
    .set('numeDisciplina', numeDisciplina);

  console.log(params.toString());

  return this.http.get<NoteStdPerDisc[]>(this.noteStudDiscUrl, {params});
}

  // public getNotePerDisc(note: NoteStdPerDisc): Observable<NoteStdPerDisc[]> {
  //   return this.http.post<NoteStdPerDisc[]>(this.noteStudDiscUrl, note);
  // }

  // public getNotePerDisc(note: NoteStdPerDisc): Observable<> {
  //   return this.http.get<NoteStdPerDisc[]>(this.noteStudDiscUrl, note);
  // }
//
// sendPostRequest(data: any): Observable<any> {
//   return this.httpClient.post<any>(YOUR-SERVER-URL, data);
// }

  // public getProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]>(`api/products/v1/`);
  // }
}
