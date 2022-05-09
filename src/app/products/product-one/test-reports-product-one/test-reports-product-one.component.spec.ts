import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestReportsProductOneComponent } from './test-reports-product-one.component';

describe('TestReportsProductOneComponent', () => {
  let component: TestReportsProductOneComponent;
  let fixture: ComponentFixture<TestReportsProductOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestReportsProductOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestReportsProductOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
