import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action, StoreModule } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { trendsEffects } from '.';
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
    const spy = jasmine.createSpyObj('TrendService', ['getAll']);

    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot([]),
        EffectsModule.forRoot([TrendsEffects]),
      ],
      providers: [
        provideMockActions(() => actions$),
        { provide: TrendService, useValue: spy },
      ],
    });

    trendsEffects = TestBed.inject(TrendsEffects);
    trendServiceSpy = TestBed.inject(
      TrendService
    ) as jasmine.SpyObj<TrendService>;
  });

  it('should return loadTrendsSuccess action', (done: DoneFn) => {
    const trendListMock: Trend[] = [
      {
        id: 'id-test',
        title: 'title-test',
        body: 'body-test',
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
});
