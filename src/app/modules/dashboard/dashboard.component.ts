import {DashboardService} from './dashboard.service';
import {Component, OnInit} from '@angular/core';
import {DiscNoteFin} from '../../shared/components/model/DiscNoteFin';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService: DashboardService) {
  }

  private numeStudent: string;
  private prenumeStudent: string;
  discNoteFins: DiscNoteFin[];
  displayedColumns: string[] = ['numeDisciplina', 'notaFinala', 'anUniversitar'];

  ngOnInit() {

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

}
