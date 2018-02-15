import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { CounterService } from '../shared-module/counter.service';
// import { Subscription } from 'rxjs/Subscription';
// import { SELECT_SHAPE, SELECT_FONT, ADD_TEXT, TOGGLE_CLIP, TOGGLE_GEMS, COMPLETE } from './../../pet-tag.actions';
// import { PetTag } from './../../pet-tag.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnDestroy {
  // tagState$: Observable<PetTag>;
  // private tagStateSubscription: Subscription;
  // petTag: PetTag;
  // done = false;

  // constructor(private store: Store<PetTag>) {
  //   this.tagState$ = store.select('petTag');
  // }

  constructor(public counterService: CounterService) {

  }

  ngOnInit() {
    // this.tagStateSubscription = this.tagState$.subscribe((state) => {
    //   this.petTag = state;
    //   this.done = !!(this.petTag.shape && this.petTag.text);
    // });
  }

  increaseCounter() {
    this.counterService.counter += 1;
  }

  ngOnDestroy() {
    // this.tagStateSubscription.unsubscribe();
  }

  // selectShapeHandler(shape: string) {
  //   this.store.dispatch({
  //     type: SELECT_SHAPE,
  //     payload: fontType
  //   });
  // }

}
