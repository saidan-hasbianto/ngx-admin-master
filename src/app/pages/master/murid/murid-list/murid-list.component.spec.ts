import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuridListComponent } from './murid-list.component';

describe('MuridListComponent', () => {
  let component: MuridListComponent;
  let fixture: ComponentFixture<MuridListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuridListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
