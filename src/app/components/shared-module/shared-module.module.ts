import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from './counter.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GeneralHeader } from './interceptor';
import { CommanComponent } from './comman/comman.component';
// import { CommanComponent } from './comman/comman.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CommanComponent
  ],
  exports: [
    CommanComponent
  ]
})
export class SharedModuleModule {
  static forRoot() {
    return {
      ngModule: SharedModuleModule,
      providers: [
        CounterService
        ,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: GeneralHeader,
          multi: true
        }
      ]
    };
  }
}
