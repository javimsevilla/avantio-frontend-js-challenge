import { Trend } from '../../models/trend.model';
import * as TrendsApiActions from '../actions/trends-api.actions';
import * as fromReducer from './index';

describe('Trends Reducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const { initialState } = fromReducer;
      const action = { type: 'Unknown' };
      const state = fromReducer.trendsReducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });

  describe('loadTrendsSuccess action', () => {
    it('should retrieve all trends and update the state in an immutable way', () => {
      const { initialState } = fromReducer;
      const newState: fromReducer.State = {
        ids: ['id-test'],
        entities: {
          'id-test': {
            id: 'id-test',
            title: 'title-test',
            body: ['body-test'],
            provider: 'elpais',
            image: 'image-test',
            url: 'url-test',
            createdAt: new Date(),
          },
        },
        selectedTrend: null,
      };
      const action = TrendsApiActions.loadTrendsSuccess({
        trends: [newState.entities['id-test'] as Trend],
      });
      const state = fromReducer.trendsReducer(initialState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
    });
  });

  describe('loadTrendsError action', () => {
    it('should reset all trends and update the state in an immutable way', () => {
      const { initialState } = fromReducer;
      const newState: fromReducer.State = { ...initialState };
      const action = TrendsApiActions.loadTrendsError();
      const state = fromReducer.trendsReducer(initialState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
    });
  });

  describe('loadOneTrendSuccess action', () => {
    it('should retrieve one trend and update the state in an immutable way', () => {
      const { initialState } = fromReducer;
      const newState: fromReducer.State = {
        ids: [],
        entities: {},
        selectedTrend: {
          id: 'id-test',
          title: 'title-test',
          body: ['body-test'],
          provider: 'elpais',
          image: 'image-test',
          url: 'url-test',
          createdAt: new Date(),
        },
      };
      const action = TrendsApiActions.loadOneTrendSuccess({
        trend: newState.selectedTrend as Trend,
      });
      const state = fromReducer.trendsReducer(initialState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
    });
  });

  describe('loadOneTrendError action', () => {
    it('should unselect selected trend and update the state in an immutable way', () => {
      const initialState: fromReducer.State = {
        ids: [],
        entities: {},
        selectedTrend: {
          id: 'id-test',
          title: 'title-test',
          body: ['body-test'],
          provider: 'elpais',
          image: 'image-test',
          url: 'url-test',
          createdAt: new Date(),
        },
      };
      const newState: fromReducer.State = {
        ids: [],
        entities: {},
        selectedTrend: null,
      };
      const action = TrendsApiActions.loadOneTrendError();
      const state = fromReducer.trendsReducer(initialState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
    });
  });
});
