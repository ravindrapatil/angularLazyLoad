import { TestBed, inject } from '@angular/core/testing';

import { LessonServiceService } from './lesson-service.service';

describe('LessonServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LessonServiceService]
    });
  });

  it('should be created', inject([LessonServiceService], (service: LessonServiceService) => {
    expect(service).toBeTruthy();
  }));
});
