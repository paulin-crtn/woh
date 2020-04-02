import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountHelperComponent } from './account-helper.component';

describe('AccountHelperComponent', () => {
  let component: AccountHelperComponent;
  let fixture: ComponentFixture<AccountHelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountHelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
