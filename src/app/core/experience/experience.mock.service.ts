import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MOCK_EXPERIENCES } from 'src/mock-data/experience';
import { Experience } from './experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceMockService {

  constructor() { }

  getExperiences(): Observable<Experience[]> {
    return of(MOCK_EXPERIENCES);
  }
}
