import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  routerNavigationAction,
  RouterNavigationPayload,
  SerializedRouterStateSnapshot,
} from '@ngrx/router-store';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { Trend } from '../../models/trend.model';
import { TrendService } from '../../trend.service';
import * as TrendsAPIActions from '../actions/trends-api.actions';
import * as TrendsListPageActions from '../actions/trends-list-page.actions';
import { TrendsEffects } from './trends.effects';

describe('Trends Effects', () => {
  let actions$ = new Observable<Action>();
  let trendServiceSpy: jasmine.SpyObj<TrendService>;
  let trendsEffects: TrendsEffects;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('TrendService', ['getAll', 'getOne']);

    TestBed.configureTestingModule({
      imports: [EffectsModule.forRoot([TrendsEffects])],
      providers: [
        provideMockStore(),
        provideMockActions(() => actions$),
        { provide: TrendService, useValue: spy },
      ],
    });

    trendsEffects = TestBed.inject(TrendsEffects);
    trendServiceSpy = TestBed.inject(
      TrendService
    ) as jasmine.SpyObj<TrendService>;
  });

  afterEach(() => {
    // Reset actions stream to avoid calling previous effects
    actions$ = new Observable<Action>();
  });

  it('should return loadTrendsSuccess action', (done: DoneFn) => {
    const trendListMock: Trend[] = [
      {
        id: 'id-test',
        title: 'title-test',
        body: ['body-test'],
        provider: 'elpais',
        image: 'image-test',
        url: 'url-test',
        createdAt: new Date(),
      },
    ];

    actions$ = of(TrendsListPageActions.loadTrends());

    trendServiceSpy.getAll.and.returnValue(of(trendListMock));

    trendsEffects.loadTrends$.subscribe({
      next: (action) => {
        expect(action).toEqual(
          TrendsAPIActions.loadTrendsSuccess({ trends: [...trendListMock] })
        );
        done();
      },
      error: done.fail,
    });
  });

  it('should return loadOneTrendSuccess action', (done: DoneFn) => {
    const testId = 'idtest1';
    const trendMock: Trend = {
      id: testId,
      title: 'title-test',
      body: ['body-test'],
      provider: 'elpais',
      image: 'image-test',
      url: 'url-test',
      createdAt: new Date(),
    };

    actions$ = of(
      routerNavigationAction({
        payload: {
          event: { url: '/trends/idtest1' },
          routerState: { root: { firstChild: { params: { id: testId } } } },
        } as unknown as RouterNavigationPayload<SerializedRouterStateSnapshot>,
      })
    );

    trendServiceSpy.getOne.withArgs('idtest1').and.returnValue(of(trendMock));

    trendsEffects.loadOneTrend$.subscribe({
      next: (action) => {
        expect(action).toEqual(
          TrendsAPIActions.loadOneTrendSuccess({ trend: trendMock })
        );
        done();
      },
      error: done.fail,
    });
  });
});
