import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeartmentListComponent } from './deartment-list.component';

describe('DeartmentListComponent', () => {
  let component: DeartmentListComponent;
  let fixture: ComponentFixture<DeartmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeartmentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeartmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
