import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MOCK_EXPERIENCES_PREVIEW, MOCK_EXPERIENCE } from 'src/mock-data/experience';
import { Experience, Experience_Preview } from './experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceMockService {

  constructor() { }

  getExperiences(start: number, stop: number): Observable<Experience_Preview[]> {
    return of(MOCK_EXPERIENCES_PREVIEW.slice(start, stop));
  }

  getExperience(id: number): Observable<Experience> {
    return of(MOCK_EXPERIENCE);
  }
}