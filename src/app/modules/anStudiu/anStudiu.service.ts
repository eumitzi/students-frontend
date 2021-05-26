import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NoteDto} from '../../shared/components/model/notaDto';

@Injectable({
  providedIn: 'root'
})
export class AnStudiuService {

  private notePerAnStudiu: string;

  constructor(private http: HttpClient) {
    this.notePerAnStudiu = 'http://localhost:8085/api/student/note/anStudiu';
  }

  getRepos(idStudent: string, tipNote: string, idAnStudiu: string): Observable<NoteDto[]> {
    const params = new HttpParams()
      .set('idStudent', idStudent)
      .set('tipNote', tipNote)
      .set('idAnStudiu', idAnStudiu);

    console.log(params.toString());

    return this.http.get<NoteDto[]>(this.notePerAnStudiu, {params});
  }

}
