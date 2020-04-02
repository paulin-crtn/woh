import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWelcomePanelComponent } from './user-welcome-panel.component';

describe('UserWelcomePanelComponent', () => {
  let component: UserWelcomePanelComponent;
  let fixture: ComponentFixture<UserWelcomePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserWelcomePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWelcomePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
