import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery.component';
import { ImagedetailsComponent } from './imagedetails/imagedetails.component';

const GALLERY_ROUTER: Routes = [
    {
        path: '',
        component: GalleryComponent,
    },
    {
        path: 'imageDetails',
        component: ImagedetailsComponent
    }
];

export const galleryRouter = RouterModule.forChild(GALLERY_ROUTER);
