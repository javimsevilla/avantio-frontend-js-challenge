import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTrends from '../reducers';
import { getSelectors } from '@ngrx/router-store';

const { selectRouteParams } = getSelectors();

export const selectTrendsState = createFeatureSelector<fromTrends.State>(
  fromTrends.trendsFeatureKey
);

export const selectTrendIds = createSelector(
  selectTrendsState,
  fromTrends.selectTrendIds
);

export const selectTrendEntities = createSelector(
  selectTrendsState,
  fromTrends.selectTrendEntities
);

export const selectAllTrends = createSelector(
  selectTrendsState,
  fromTrends.selectAllTrends
);

export const selectTrendsByProvider = createSelector(
  selectAllTrends,
  selectRouteParams,
  (trends, { provider }) =>
    provider ? trends.filter((trend) => trend.provider === provider) : trends
);

export const selectTrendsTotal = createSelector(
  selectTrendsState,
  fromTrends.selectTrendTotal
);
