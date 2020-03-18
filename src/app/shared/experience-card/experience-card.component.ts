import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Experience } from 'src/app/core/experience/experience';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent implements OnInit {
  @Input() experience: Experience;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getBackgroundImageUrl() {
    return this.sanitizer.bypassSecurityTrustStyle(`url('${this.experience.gallery_pictures_url[0]}')`);
  }

}
