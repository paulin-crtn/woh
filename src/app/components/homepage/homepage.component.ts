import { Component, OnInit } from '@angular/core';

import { Experience } from 'src/app/core/experience/experience';
import { ExperienceMockService } from 'src/app/core/experience/experience.mock.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  experiences: Experience[];
  
  constructor(private experienceService: ExperienceMockService) { }

  ngOnInit() {
    this.experienceService.getExperiences().subscribe(experiences => {
      this.experiences = experiences;
      console.log(this.experiences);
    });
  }

}
