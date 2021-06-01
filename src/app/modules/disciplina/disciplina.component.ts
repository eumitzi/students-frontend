import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DisciplinaService } from './disciplina.service';

import * as xlsx from 'xlsx';
import {Subscription} from 'rxjs';
import {NotePerDisc} from '../../shared/components/model/notePerDisc';



@Component({
  selector: 'app-dashboard',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.scss']
})
export class DisciplinaComponent implements OnInit {

  constructor(private disciplinaService: DisciplinaService) { }

  private numeStudent: string;
  private prenumeStudent: string;
  private numeDisciplina: string;
  notePerDiscs: NotePerDisc[];
  sub: Subscription | undefined;

  ngOnInit() {

  }
  onSubmit() {
    this.disciplinaService.getRepos(this.numeStudent, this.prenumeStudent, this.numeDisciplina).subscribe( data =>
    {
      this.notePerDiscs = data as NotePerDisc[]; // not working without this
      console.log(this.notePerDiscs);
    }
    );
    console.log(this.notePerDiscs);
    console.log(this.numeDisciplina);
    console.log(this.numeStudent);
    console.log(this.prenumeStudent);
  }


  // exportToExcel() {
  //   const ws: xlsx.WorkSheet =
  //   xlsx.utils.table_to_sheet(this.table.nativeElement);
  //   const wb: xlsx.WorkBook = xlsx.utils.book_new();
  //   xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
  //   xlsx.writeFile(wb, 'note.xlsx');
  // }

  // Cautare
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  //
  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

}
