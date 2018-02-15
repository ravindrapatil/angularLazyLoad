import { Component, OnInit } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule, HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule, FormControl} from '@angular/forms';
import { LessonServiceService } from '../../providers/lesson-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  animals: any;
  girls = 'girls';
  showsList: any;

  options = [
    { id: 1, label: 'Option one' },
    { id: 2, label: 'Option two' },
    { id: 3, label: 'Option three' }
  ];

  control = new FormControl(this.options[1]);

  constructor(private http: HttpClient, private lesson: LessonServiceService) {}
  ngOnInit() {
    setTimeout(() => {
      this.options = [
        { id: 1, label: 'Option one' },
        { id: 2, label: 'Option two' },
        { id: 3, label: 'Option three' },
        { id: 4, label: 'Option four' }
      ];
    }, 2000);

    this.http.get('https://api.github.com/users/ravindrapatil').subscribe(
      (res) => {
        console.log(res);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client side error occured');
        } else {
          console.log('Server side error occured');
        }
      }
    );

    // http://api.tvmaze.com/search/shows?q=girls
    return this.http.get('http://api.tvmaze.com/search/shows', {
      params: new HttpParams().set('q', this.girls)
    }).subscribe(res => {
      this.showsList = res;
      console.log(this.showsList);
    });

  }

  compareFn(optionOne, optionTwo) {
    return optionOne.id === optionTwo.id;
  }

}
