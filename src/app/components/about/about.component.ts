import { Component, OnInit } from '@angular/core';
import { LessonServiceService } from '../../providers/lesson-service.service';
import { CommonServiceService } from './providers/common-service.service';
import { CounterService } from '../shared-module/counter.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private http: HttpClient, private lesson: LessonServiceService, private commonServ: CommonServiceService,
    public counterService: CounterService) { }

  ngOnInit() {
    this.commonServ.doCommonAction();

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
  }

  increaseCounter() {
    this.counterService.counter += 1;
  }

}
