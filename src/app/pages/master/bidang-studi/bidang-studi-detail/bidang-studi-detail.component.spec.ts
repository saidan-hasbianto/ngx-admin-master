import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidangStudiDetailComponent } from './bidang-studi-detail.component';

describe('BidangStudiDetailComponent', () => {
  let component: BidangStudiDetailComponent;
  let fixture: ComponentFixture<BidangStudiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidangStudiDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidangStudiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
