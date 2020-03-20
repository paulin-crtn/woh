import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta,
  ) { }

  ngOnInit() {
    // PAGE TITLE
    this.titleService.setTitle('Search and find the travel experience that suits you | Worldhelpers');
    // META DESCRIPTION
    this.meta.updateTag({name: 'description', content: ''});
  }

}
