import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { Experience } from 'src/app/core/experience/experience';
import { ExperienceMockService } from 'src/app/core/experience/experience.mock.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  experiences: Experience[];
  
  constructor(
    private titleService: Title,
    private meta: Meta,
    private experienceService: ExperienceMockService) {}

  ngOnInit() {
    // PAGE TITLE
    this.titleService.setTitle('Go abroad by exchanging your services for accommodation | Worldhelpers');
    // META DESCRIPTION
    this.meta.updateTag({name: 'description', content: 'Travel on a budget by doing volunteer work in exchange for free accommodation on farms, backpacker hostels, schools or families.'});
    // LAST EXPERIENCES
    this.experienceService.getExperiences().subscribe(experiences => {
      this.experiences = experiences;
      console.log(this.experiences);
    });
  }

}
