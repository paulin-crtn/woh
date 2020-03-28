import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceReportDialogComponent } from './experience-report-dialog.component';

describe('ExperienceReportDialogComponent', () => {
  let component: ExperienceReportDialogComponent;
  let fixture: ComponentFixture<ExperienceReportDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceReportDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceReportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
