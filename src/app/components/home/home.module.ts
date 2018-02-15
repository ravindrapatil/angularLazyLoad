import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HomeComponent } from './home.component';

import { homeRouter } from './home.router';

import { SharedModuleModule } from '../shared-module/shared-module.module';
import { GeneralHeader } from '../shared-module/interceptor';

@NgModule({
  imports: [
    CommonModule,
    homeRouter,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModuleModule
  ],
  declarations: [HomeComponent],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: GeneralHeader,
    //   multi: true
    // }
  ]
})
export class HomeModule { }
