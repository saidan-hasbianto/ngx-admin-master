import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidangStudiListComponent } from './bidang-studi-list.component';

describe('BidangStudiListComponent', () => {
  let component: BidangStudiListComponent;
  let fixture: ComponentFixture<BidangStudiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidangStudiListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidangStudiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
