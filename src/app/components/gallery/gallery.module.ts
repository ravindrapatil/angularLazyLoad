import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';

import { galleryRouter } from './gallery.router';
import { ImagedetailsComponent } from './imagedetails/imagedetails.component';
import { RouterModule } from '@angular/router';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    galleryRouter,
    SharedModuleModule
  ],
  declarations: [GalleryComponent, ImagedetailsComponent]
})
export class GalleryModule { }
