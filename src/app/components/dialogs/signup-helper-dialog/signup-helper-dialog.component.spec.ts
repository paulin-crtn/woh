import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupHelperDialogComponent } from './signup-helper-dialog.component';

describe('SignupHelperDialogComponent', () => {
  let component: SignupHelperDialogComponent;
  let fixture: ComponentFixture<SignupHelperDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupHelperDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupHelperDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
