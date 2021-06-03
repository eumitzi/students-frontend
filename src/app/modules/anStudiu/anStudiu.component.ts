import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnStudiuService } from './anStudiu.service';

import {NoteDto} from '../../shared/components/model/notaDto';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-dashboard',
  templateUrl: './anStudiu.component.html',
  styleUrls: ['./anStudiu.component.scss']
})
export class AnStudiuComponent {

  constructor(private anStudiuService: AnStudiuService) { }

  private tipNote: string;
  private idAnStudiu: string;
  private numeStudent: string;
  private prenumeStudent: string;
  notePerAnStd: NoteDto[];
  displayedColumns: string[] = ['numeDisc', 'data', 'valoareNota'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  onSubmit() {
    this.anStudiuService.getRepos(this.numeStudent, this.prenumeStudent, this.tipNote, this.idAnStudiu).subscribe( data =>
    {
      console.log(data)
      this.notePerAnStd = data as NoteDto[]; // not working without this
      console.log(this.notePerAnStd);
    }
    );
    console.log(this.notePerAnStd);
    console.log(this.idAnStudiu);
    console.log(this.tipNote);
  }


}
