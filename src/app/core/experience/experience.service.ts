import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MOCK_EXPERIENCE, MOCK_EXPERIENCES } from 'src/mock-data/experience';
import { Experience } from './experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() { }

  getExperiences(): Observable<Experience[]> {
    return of(MOCK_EXPERIENCES);
  }

  getExperience(id: number): Observable<Experience> {
    return of(MOCK_EXPERIENCE);
  }
}
