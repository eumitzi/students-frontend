import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from './dashboard.service';

import * as xlsx from 'xlsx';

export default interface Disciplina {
  numeDisciplina: string;
  nrCrt: number;
  nota: number;
  semestru: string;
}
const ELEMENT_DATA: Disciplina[] = [
  { nrCrt: 1, numeDisciplina: 'Algebra', nota: 5, semestru: '1' },
  { nrCrt: 2, numeDisciplina: 'Analiza matematica', nota: 7, semestru: '1' },
  { nrCrt: 3, numeDisciplina: 'Programare', nota: 7, semestru: '1' },
  { nrCrt: 4, numeDisciplina: 'Fizica', nota: 9., semestru: '1' },
  { nrCrt: 5, numeDisciplina: 'Logica digitala', nota: 10, semestru: '1' },
  { nrCrt: 6, numeDisciplina: 'Carbon', nota: 10, semestru: '1' },
  { nrCrt: 7, numeDisciplina: 'Nitrogen', nota: 5, semestru: '1' },
  { nrCrt: 8, numeDisciplina: 'Oxygen', nota: 5, semestru: '1' },
  { nrCrt: 9, numeDisciplina: 'Fluorine', nota: 6, semestru: '1' },
  { nrCrt: 10, numeDisciplina: 'Neon', nota: 7, semestru: '1' },
  { nrCrt: 11, numeDisciplina: 'Sodium', nota: 4, semestru: '1' },
  { nrCrt: 12, numeDisciplina: 'Magnesium', nota: 8, semestru: '1' },
  { nrCrt: 13, numeDisciplina: 'Aluminum', nota: 9, semestru: '1' },
  { nrCrt: 14, numeDisciplina: 'Silicon', nota: 9, semestru: '1' },
  { nrCrt: 15, numeDisciplina: 'Phosphorus', nota: 9, semestru: '1' },
  { nrCrt: 16, numeDisciplina: 'Sulfur', nota: 8, semestru: '1' },
  { nrCrt: 17, numeDisciplina: 'Chlorine', nota: 8, semestru: '1' },
  { nrCrt: 18, numeDisciplina: 'Argon', nota: 8, semestru: '1' },
  { nrCrt: 19, numeDisciplina: 'Potassium', nota: 9, semestru: '1' },
  { nrCrt: 20, numeDisciplina: 'Potassium', nota: 9, semestru: '1' },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  bigChart = [];
  cards = [];
  pieChart = [];

  displayedColumns: string[] = ['nrCrt', 'numeDisciplina', 'nota', 'semestru'];

  constructor(private dashboardService: DashboardService) { }

  private _listFilter = '';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log('in setter: ', value);
   // this.filteredProducts = this.performFilter(value);
  }

}
