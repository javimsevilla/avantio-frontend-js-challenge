import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { TrendDetailComponent } from './trend-detail.component';

describe('TrendDetailComponent', () => {
  let component: TrendDetailComponent;
  let fixture: ComponentFixture<TrendDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrendDetailComponent],
      providers: [provideMockStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(TrendDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
