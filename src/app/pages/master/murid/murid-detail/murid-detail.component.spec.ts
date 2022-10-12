import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuridDetailComponent } from './murid-detail.component';

describe('MuridDetailComponent', () => {
  let component: MuridDetailComponent;
  let fixture: ComponentFixture<MuridDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuridDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuridDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
