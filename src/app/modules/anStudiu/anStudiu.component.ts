import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnStudiuService } from './anStudiu.service';

import * as xlsx from 'xlsx';
import {NoteDto} from '../../shared/components/model/notaDto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './anStudiu.component.html',
  styleUrls: ['./anStudiu.component.scss']
})
export class AnStudiuComponent implements OnInit {

  constructor(private anStudiuService: AnStudiuService) { }

  private idStudent: string;
  private tipNote: string;
  private idAnStudiu: string;
  notePerAnStd: NoteDto[];

  ngOnInit() {

  }
  onSubmit() {
    this.anStudiuService.getRepos(this.idStudent, this.tipNote, this.idAnStudiu).subscribe( data =>
    {
      console.log(data)
      this.notePerAnStd = data as NoteDto[]; // not working without this
      console.log(this.notePerAnStd);
    }
    );
    console.log(this.notePerAnStd);
    console.log(this.idStudent);
    console.log(this.idAnStudiu);
    console.log(this.tipNote);
  }


}
