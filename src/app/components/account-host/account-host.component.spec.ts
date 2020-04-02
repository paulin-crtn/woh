import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountHostComponent } from './account-host.component';

describe('AccountHostComponent', () => {
  let component: AccountHostComponent;
  let fixture: ComponentFixture<AccountHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
