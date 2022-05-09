import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOneFeaturesComponent } from './product-one-features.component';

describe('ProductOneFeaturesComponent', () => {
  let component: ProductOneFeaturesComponent;
  let fixture: ComponentFixture<ProductOneFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductOneFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOneFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
