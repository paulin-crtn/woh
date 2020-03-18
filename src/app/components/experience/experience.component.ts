import { Component, OnInit, ViewChild } from '@angular/core';
import { Title, Meta, DomSanitizer } from '@angular/platform-browser';

import { Experience } from 'src/app/core/experience/experience';
import { ExperienceMockService } from 'src/app/core/experience/experience.mock.service';

import { NgxImageGalleryComponent, GALLERY_IMAGE, GALLERY_CONF } from "ngx-image-gallery";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  /**************************************************/
  // GALLERY INIT - Source https://www.npmjs.com/package/ngx-image-gallery-public
  /**************************************************/

  // Get reference to gallery component
  @ViewChild(NgxImageGalleryComponent, null) ngxImageGallery: NgxImageGalleryComponent;
  
  // Gallery configuration
  conf: GALLERY_CONF = {
    imageBorderRadius: '10px',
    imageOffset: '20px',
    thumbnailSize: 90,
    showImageTitle: false,
  };
	
  // Gallery images
  images: GALLERY_IMAGE[] = [];

  /**************************************************/

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
    // FILL GALLERY_IMAGE
    this.fillGallery();
  }

  /**************************************************/
  // GALLERY METHODS
  /**************************************************/

  // Open gallery
  openGallery(index: number = 0) {
    this.ngxImageGallery.open(index);
  }
	
  // Close gallery
  closeGallery() {
    this.ngxImageGallery.close();
  }
	
  // Next image in gallery
  nextImage(index: number = 0) {
    this.ngxImageGallery.next();
  }
	
  // Prev image in gallery
  prevImage(index: number = 0) {
    this.ngxImageGallery.prev();
  }
	
  /**************************************************/
  
  fillGallery() {
    for (const url of this.experience.gallery_pictures_url) {
      this.images.push({url});
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
