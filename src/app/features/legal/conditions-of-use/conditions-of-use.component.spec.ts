import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionsOfUseComponent } from './conditions-of-use.component';

describe('ConditionsOfUseComponent', () => {
  let component: ConditionsOfUseComponent;
  let fixture: ComponentFixture<ConditionsOfUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionsOfUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionsOfUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
