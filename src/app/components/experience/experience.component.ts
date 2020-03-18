import { Component, OnInit } from '@angular/core';
import { Title, Meta, DomSanitizer } from '@angular/platform-browser';

import { Experience } from 'src/app/core/experience/experience';
import { ExperienceMockService } from 'src/app/core/experience/experience.mock.service';

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

  displayGallery() {
    for (const url of this.experience.gallery_pictures_url) {
      console.log(url);
    }
  }
  
  getBackgroundImageUrl() {
    return this.sanitizer.bypassSecurityTrustStyle(`url('${this.experience.gallery_pictures_url[0]}')`);
  }

  getHostPictureUrl() {
    return this.sanitizer.bypassSecurityTrustStyle(`url('${this.experience.host.profile_picture_url}')`);
  }

  getReviewUserProfilePictureUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustStyle(`url('${url}')`);
  }
}
