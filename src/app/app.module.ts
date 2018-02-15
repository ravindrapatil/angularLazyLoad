import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';
// import { petTagReducer } from './pet-tag.reducer';
import { simpleReducer } from './simple.reducer';

// ngx-bootstrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { appRouter } from './app.router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LessonServiceService } from './providers/lesson-service.service';
import { SharedModuleModule } from './components/shared-module/shared-module.module';
// import { CommanComponent } from './components/shared-module/comman/comman.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GeneralHeader } from './providers/interceptors';
import { NavbarModule } from './components/navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({message: simpleReducer}),
    // StoreModule.forRoot({petTag: petTagReducer}),
    FormsModule,
    HttpModule,
    appRouter,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    SharedModuleModule.forRoot()
  ],
  providers: [
    LessonServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// ng g module lazy --flat
// ng g component lazy-parent --module lazy
// ng g component lazy-child --module lazy
