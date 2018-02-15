import { Injectable } from '@angular/core';

@Injectable()
export class CommonServiceService {

  constructor() {
    console.log('This is a service present in the about module');
  }

  doCommonAction() {
    console.log('Common Service: This is a common service present in about module');
  }

}
