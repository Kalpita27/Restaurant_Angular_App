import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReastaurantDetailsComponent } from './reastaurant-details.component';

describe('ReastaurantDetailsComponent', () => {
  let component: ReastaurantDetailsComponent;
  let fixture: ComponentFixture<ReastaurantDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReastaurantDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReastaurantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
