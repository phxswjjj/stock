import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdmComponent } from './ddm.component';

describe('DdmComponent', () => {
  let component: DdmComponent;
  let fixture: ComponentFixture<DdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
