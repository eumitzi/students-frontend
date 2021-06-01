import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import {DisciplinaComponent} from './modules/disciplina/disciplina.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AnStudiuComponent} from './modules/anStudiu/anStudiu.component';
import {IgxPieChartModule} from 'igniteui-angular-charts';

@NgModule({
  declarations: [
    AppComponent,
    DisciplinaComponent,
    AnStudiuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    FormsModule,
    HttpClientModule,
    IgxPieChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
