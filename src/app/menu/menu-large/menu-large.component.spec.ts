import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MenuLargeComponent } from './menu-large.component';

describe('MenuLargeComponent', () => {
  let component: MenuLargeComponent;
  let fixture: ComponentFixture<MenuLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuLargeComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
