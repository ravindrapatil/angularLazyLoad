import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';

import { aboutRouter } from './about.router';
import { CommonServiceService } from './providers/common-service.service';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GeneralHeader } from '../shared-module/interceptor';

@NgModule({
  imports: [
    CommonModule,
    aboutRouter,
    HttpClientModule,
    SharedModuleModule
  ],
  declarations: [AboutComponent],
  providers: [
    CommonServiceService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: GeneralHeader,
    //   multi: true
    // }
  ]
})
export class AboutModule { }
