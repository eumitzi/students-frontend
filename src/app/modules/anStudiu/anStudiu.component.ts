import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnStudiuService } from './anStudiu.service';

import * as xlsx from 'xlsx';
import {Subscription} from 'rxjs';
import {NotePerDisc} from '../../shared/components/model/notePerDisc';
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
  sub: Subscription | undefined;

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
