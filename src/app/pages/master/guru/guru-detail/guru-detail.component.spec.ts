import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuruDetailComponent } from './guru-detail.component';

describe('GuruDetailComponent', () => {
  let component: GuruDetailComponent;
  let fixture: ComponentFixture<GuruDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuruDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuruDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
