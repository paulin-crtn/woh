import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta,
  ) { }

  ngOnInit() {
    // PAGE TITLE
    this.titleService.setTitle('How it works | Worldhelpers');
    // META DESCRIPTION
    this.meta.updateTag({name: 'description', content: ''});
  }

}
