import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KelasDetailComponent } from './kelas-detail.component';

describe('KelasDetailComponent', () => {
  let component: KelasDetailComponent;
  let fixture: ComponentFixture<KelasDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KelasDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KelasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
