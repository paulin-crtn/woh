import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-become-host',
  templateUrl: './become-host.component.html',
  styleUrls: ['./become-host.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BecomeHostComponent implements OnInit {
  constructor(
    private titleService: Title,
    private meta: Meta,
  ) { }

  ngOnInit() {
      // PAGE TITLE
      this.titleService.setTitle('Become a host | Worldhelpers');
      // META DESCRIPTION
      this.meta.updateTag({name: 'description', content: ''});
  }
}
