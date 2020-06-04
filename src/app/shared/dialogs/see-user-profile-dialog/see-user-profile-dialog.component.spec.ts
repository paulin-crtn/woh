import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeUserProfileDialogComponent } from './see-user-profile-dialog.component';

describe('SeeUserProfileDialogComponent', () => {
  let component: SeeUserProfileDialogComponent;
  let fixture: ComponentFixture<SeeUserProfileDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeUserProfileDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeUserProfileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
