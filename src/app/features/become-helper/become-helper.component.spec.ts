import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeHelperComponent } from './become-helper.component';

describe('BecomeAHelperComponent', () => {
  let component: BecomeHelperComponent;
  let fixture: ComponentFixture<BecomeHelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomeHelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
