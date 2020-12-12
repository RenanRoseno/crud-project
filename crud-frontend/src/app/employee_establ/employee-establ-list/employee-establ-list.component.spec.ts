import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEstablListComponent } from './employee-establ-list.component';

describe('EmployeeEstablListComponent', () => {
  let component: EmployeeEstablListComponent;
  let fixture: ComponentFixture<EmployeeEstablListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeEstablListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeEstablListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
