import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MenuSmallComponent } from './menu-small.component';

describe('MenuSmallComponent', () => {
  let component: MenuSmallComponent;
  let fixture: ComponentFixture<MenuSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuSmallComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
