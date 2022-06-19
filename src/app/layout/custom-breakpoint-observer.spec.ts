import { TestBed } from '@angular/core/testing';
import { combineLatest } from 'rxjs';
import { AppLayoutModule } from './app-layout.module';

import { CustomBreakpointObserver } from './custom-breakpoint-observer';

describe('CustomBreakpointObserver', () => {
  let customBreakpointObserver: CustomBreakpointObserver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppLayoutModule],
    });
    customBreakpointObserver = TestBed.inject(CustomBreakpointObserver);
  });

  afterEach(() => {
    viewport.reset();
  });

  it('should be created', () => {
    expect(customBreakpointObserver).toBeTruthy();
  });

  it('should get small viewport active', (done: DoneFn) => {
    viewport.set('small-screen');
    combineLatest([
      customBreakpointObserver.breakpointState$,
      customBreakpointObserver.isSmall$,
    ]).subscribe({
      next: ([state, isSmall]) => {
        expect(state).toEqual({
          isSmall: true,
          isMedium: false,
          isLarge: false,
        });
        expect(isSmall).toBeTrue();
        done();
      },
      error: done.fail,
    });
  });

  it('should get medium viewport active', (done: DoneFn) => {
    viewport.set('medium-screen');
    combineLatest([
      customBreakpointObserver.breakpointState$,
      customBreakpointObserver.isMedium$,
    ]).subscribe({
      next: ([state, isMedium]) => {
        expect(state).toEqual({
          isSmall: false,
          isMedium: true,
          isLarge: false,
        });
        expect(isMedium).toBeTrue();
        done();
      },
      error: done.fail,
    });
  });

  it('should get large viewport active', (done: DoneFn) => {
    viewport.set('large-screen');
    combineLatest([
      customBreakpointObserver.breakpointState$,
      customBreakpointObserver.isLarge$,
    ]).subscribe({
      next: ([state, isLarge]) => {
        expect(state).toEqual({
          isSmall: false,
          isMedium: false,
          isLarge: true,
        });
        expect(isLarge).toBeTrue();
        done();
      },
      error: done.fail,
    });
  });
});
