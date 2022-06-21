import { State } from '../reducers';
import {
  selectAllTrends,
  selectTrendEntities,
  selectTrendIds,
  selectTrendsLoading,
  selectTrendsTotal,
} from './trends.selectors';

describe('Trends Selectors', () => {
  const initialState: State = {
    ids: ['1', '2'],
    entities: {
      '1': {
        body: 'body-1',
        createdAt: new Date(),
        id: '1',
        image: 'image-1',
        provider: 'elpais',
        title: 'title-1',
        url: 'url-1',
      },
      '2': {
        body: 'body-2',
        createdAt: new Date(),
        id: '2',
        image: 'image-2',
        provider: 'elmundo',
        title: 'title-2',
        url: 'url-2',
      },
    },
    loading: false,
  };

  it('should select loading trends', () => {
    const trendsLoading = selectTrendsLoading.projector(initialState);
    expect(trendsLoading).toBeFalse();
  });

  it('should select the trend ids list', () => {
    const trendIds = selectTrendIds.projector(initialState);
    expect(trendIds.length).toEqual(2);
    expect(trendIds[0]).toBe('1');
  });

  it('should select the trend entities', () => {
    const trendEntitites = selectTrendEntities.projector(initialState);
    expect(Object.entries(trendEntitites).length).toEqual(2);
    expect(trendEntitites['1']).toBe(initialState.entities['1']);
  });

  it('should select all trends list', () => {
    const trends = selectAllTrends.projector(initialState);
    expect(trends.length).toEqual(2);
    expect(trends[1].id).toBe('2');
  });

  it('should select trends total', () => {
    const trendsTotal = selectTrendsTotal.projector(initialState);
    expect(trendsTotal).toEqual(2);
  });
});
