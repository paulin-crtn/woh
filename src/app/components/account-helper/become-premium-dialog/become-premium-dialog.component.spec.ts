import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomePremiumDialogComponent } from './become-premium-dialog.component';

describe('BecomePremiumDialogComponent', () => {
  let component: BecomePremiumDialogComponent;
  let fixture: ComponentFixture<BecomePremiumDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomePremiumDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomePremiumDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
