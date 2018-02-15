import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery.component';
import { ImagedetailsComponent } from './imagedetails/imagedetails.component';
import { Component } from '@angular/core/src/metadata/directives';
import { patch } from 'webdriver-js-extender';
import { SingleimgComponent } from './singleimg/singleimg.component';
import { Singleimg2Component } from './singleimg2/singleimg2.component';

const GALLERY_ROUTER: Routes = [
    {
        path: '',
        component: GalleryComponent,
    },
    {
        path: 'imageDetails/:id',
        component: ImagedetailsComponent,
        children: [
            {
                path: 'singleImagesInfo',
                component: SingleimgComponent
            },
            {
                path: 'singleImagesInfo2',
                component: Singleimg2Component
            }
        ]
    }
];

export const galleryRouter = RouterModule.forChild(GALLERY_ROUTER);
