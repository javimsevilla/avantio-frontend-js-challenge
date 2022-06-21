import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTrends from '../reducers';

export const selectTrendsState = createFeatureSelector<fromTrends.State>(
  fromTrends.trendsFeatureKey
);

export const selectTrendsLoading = createSelector(
  selectTrendsState,
  fromTrends.selectTrendsLoading
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

export const selectTrendsTotal = createSelector(
  selectTrendsState,
  fromTrends.selectTrendTotal
);
