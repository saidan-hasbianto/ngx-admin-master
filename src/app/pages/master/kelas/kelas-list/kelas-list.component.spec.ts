import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KelasListComponent } from './kelas-list.component';

describe('KelasListComponent', () => {
  let component: KelasListComponent;
  let fixture: ComponentFixture<KelasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KelasListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KelasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
