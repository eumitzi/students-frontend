import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DisciplinaComponent} from './modules/disciplina/disciplina.component';
import {AnStudiuComponent} from './modules/anStudiu/anStudiu.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: 'anStudiu',
    component: AnStudiuComponent
  },
    {
      path: 'discipline',
      component: DisciplinaComponent
    }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
