import * as fromReducer from './index';
import * as TrendsListPageActions from '../actions/trends-list-page.actions';
import * as TrendsApiActions from '../actions/trends-api.actions';
import { Trend } from '../../models/trend.model';

describe('Trends Reducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const { initialState } = fromReducer;
      const action = { type: 'Unknown' };
      const state = fromReducer.trendsReducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });

  describe('loadTrends action', () => {
    it('should set loading trends and update the state in an immutable way', () => {
      const { initialState } = fromReducer;
      const newState: fromReducer.State = {
        ids: [],
        entities: {},
        loading: true,
      };
      const action = TrendsListPageActions.loadTrends();
      const state = fromReducer.trendsReducer(initialState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
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
            body: 'body-test',
            provider: 'elpais',
            image: 'image-test',
            url: 'url-test',
            createdAt: new Date(),
          },
        },
        loading: false,
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
      const newState: fromReducer.State = {
        ids: [],
        entities: {},
        loading: false,
      };
      const action = TrendsApiActions.loadTrendsError();
      const state = fromReducer.trendsReducer(initialState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
    });
  });
});
