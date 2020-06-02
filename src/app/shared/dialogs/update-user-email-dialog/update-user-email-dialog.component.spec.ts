import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserEmailDialogComponent } from './update-user-email-dialog.component';

describe('UpdateUserEmailDialogComponent', () => {
  let component: UpdateUserEmailDialogComponent;
  let fixture: ComponentFixture<UpdateUserEmailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUserEmailDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserEmailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
