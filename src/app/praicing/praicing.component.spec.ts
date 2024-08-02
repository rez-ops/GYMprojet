import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraicingComponent } from './praicing.component';

describe('PraicingComponent', () => {
  let component: PraicingComponent;
  let fixture: ComponentFixture<PraicingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PraicingComponent]
    });
    fixture = TestBed.createComponent(PraicingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
