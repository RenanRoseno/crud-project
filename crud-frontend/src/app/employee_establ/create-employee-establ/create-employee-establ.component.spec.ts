import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeEstablComponent } from './create-employee-establ.component';

describe('CreateEmployeeEstablComponent', () => {
  let component: CreateEmployeeEstablComponent;
  let fixture: ComponentFixture<CreateEmployeeEstablComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmployeeEstablComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeeEstablComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
