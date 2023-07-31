import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricityTimeListComponent } from './electricity-time-list.component';

describe('ElectricityTimeListComponent', () => {
  let component: ElectricityTimeListComponent;
  let fixture: ComponentFixture<ElectricityTimeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricityTimeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricityTimeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
