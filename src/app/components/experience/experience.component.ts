import { Component, OnInit } from '@angular/core';
import { Title, Meta, DomSanitizer } from '@angular/platform-browser';

import { Experience } from 'src/app/core/experience/experience';
import { ExperienceMockService } from 'src/app/core/experience/experience.mock.service';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experience: Experience;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private sanitizer: DomSanitizer,
    private experienceService: ExperienceMockService) {}

  ngOnInit() {
    // PAGE TITLE
    this.titleService.setTitle(' | Worldhelpers');
    // META DESCRIPTION
    this.meta.updateTag({name: 'description', content: ''});
    // EXPERIENCE
    this.experienceService.getExperience(1).subscribe(experience => {
      this.experience = experience;
      console.log(this.experience);
    });

  }
  
  getBackgroundImageUrl() {
    return this.sanitizer.bypassSecurityTrustStyle(`url('${this.experience.cover_picture_url}')`);
  }

  getHostPictureUrl() {
    return this.sanitizer.bypassSecurityTrustStyle(`url('${this.experience.host.profile_picture_url}')`);
  }

  getReviewUserProfilePictureUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustStyle(`url('${url}')`);
  }
}
