import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MenuMediumComponent } from './menu-medium.component';

describe('MenuMediumComponent', () => {
  let component: MenuMediumComponent;
  let fixture: ComponentFixture<MenuMediumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuMediumComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
