import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';

import { galleryRouter } from './gallery.router';
import { ImagedetailsComponent } from './imagedetails/imagedetails.component';
import { RouterModule } from '@angular/router';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { SingleimgComponent } from './singleimg/singleimg.component';
import { Singleimg2Component } from './singleimg2/singleimg2.component';


@NgModule({
  imports: [
    CommonModule,
    galleryRouter,
    SharedModuleModule
  ],
  declarations: [GalleryComponent, ImagedetailsComponent, SingleimgComponent, Singleimg2Component]
})
export class GalleryModule { }
