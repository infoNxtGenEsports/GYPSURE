import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestReportsProductTwoComponent } from './test-reports-product-two.component';

describe('TestReportsProductTwoComponent', () => {
  let component: TestReportsProductTwoComponent;
  let fixture: ComponentFixture<TestReportsProductTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestReportsProductTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestReportsProductTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
