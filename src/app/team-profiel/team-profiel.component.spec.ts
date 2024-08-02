import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamProfielComponent } from './team-profiel.component';

describe('TeamProfielComponent', () => {
  let component: TeamProfielComponent;
  let fixture: ComponentFixture<TeamProfielComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamProfielComponent]
    });
    fixture = TestBed.createComponent(TeamProfielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
