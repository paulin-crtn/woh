import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-become-host',
  templateUrl: './become-host.component.html',
  styleUrls: ['./become-host.component.scss']
})
export class BecomeHostComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
      // PAGE TITLE
      this.titleService.setTitle('Become a host | Worldhelpers');
      // META DESCRIPTION
      this.meta.updateTag({name: 'description', content: ''});
      // FORM
      this.registerForm = this.fb.group({
        firstname: this.fb.control(''),
        lastname: this.fb.control(''),
        email: this.fb.control(''),
        password: this.fb.control(''),
        gdpr: this.fb.control(''),
      });
  }



}
