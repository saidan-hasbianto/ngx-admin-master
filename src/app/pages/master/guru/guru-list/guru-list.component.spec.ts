import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuruListComponent } from './guru-list.component';

describe('GuruListComponent', () => {
  let component: GuruListComponent;
  let fixture: ComponentFixture<GuruListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuruListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuruListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
