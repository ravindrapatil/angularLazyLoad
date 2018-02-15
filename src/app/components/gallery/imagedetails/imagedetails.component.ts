import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-imagedetails',
  templateUrl: './imagedetails.component.html',
  styleUrls: ['./imagedetails.component.css']
})
export class ImagedetailsComponent implements OnInit {
  private id;
  constructor(private activeParams: ActivatedRoute) { }

  ngOnInit() {
    this.activeParams.params.subscribe(data => {
      console.log(data);
      this.id = data.id;
    });
  }

}
