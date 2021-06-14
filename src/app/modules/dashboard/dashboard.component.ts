import {DashboardService} from './dashboard.service';
import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {DiscNoteFin} from '../../shared/components/model/DiscNoteFin';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import * as xlsx from 'xlsx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

  constructor(private dashboardService: DashboardService) {
  }

  private numeStudent: string;
  private prenumeStudent: string;
  discNoteFins: DiscNoteFin[];
  dataSource = new MatTableDataSource(this.discNoteFins)
  displayedColumns: string[] = ['numeDisciplina', 'notaFinala', 'anUniversitar'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('table', { static: false }) table: ElementRef;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onSubmit() {
    this.dashboardService.getRepos(this.numeStudent, this.prenumeStudent).subscribe(data => {
        this.discNoteFins = data as DiscNoteFin[]; // not working without this

      }
    );
    console.log(this.discNoteFins);
    console.log(this.numeStudent);
    console.log(this.prenumeStudent);
  }

  exportToExcel() {
    const ws: xlsx.WorkSheet =
      xlsx.utils.table_to_sheet(this.table.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'FoaieMatricola_'+ this.numeStudent + this.prenumeStudent + '.xlsx');
  }

}
