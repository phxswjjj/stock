import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwStockComponent } from './tw-stock.component';

describe('TwStockComponent', () => {
  let component: TwStockComponent;
  let fixture: ComponentFixture<TwStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
