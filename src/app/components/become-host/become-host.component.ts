import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-become-host',
  templateUrl: './become-host.component.html',
  styleUrls: ['./become-host.component.scss']
})
export class BecomeHostComponent implements OnInit {
  registerForm: FormGroup;
  submitted: Boolean;

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
        firstname: this.fb.control('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
        lastname: this.fb.control('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
        email: this.fb.control('', [Validators.required, Validators.email]),
        password: this.fb.control('', [Validators.required, Validators.minLength(6)]),
        consent: this.fb.control('', Validators.requiredTrue),
      });
  }

  // SHORTCUT TO DISPLAY FORM ERROR MESSAGES IN THE TEMPLATE
  get firstname() { return this.registerForm.get('firstname'); }
  get lastname() { return this.registerForm.get('lastname'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }

  register() {
    console.log(this.registerForm.value);
    this.submitted = true;
  }

}
