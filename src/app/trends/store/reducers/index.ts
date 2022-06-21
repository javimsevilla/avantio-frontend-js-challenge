import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Trend } from '../../models/trend.model';

import * as TrendsListPageActions from '../actions/trends-list-page.actions';
import * as TrendsApiActions from '../actions/trends-api.actions';

export const trendsFeatureKey = 'trends';

export interface State extends EntityState<Trend> {
  loading: boolean;
}

export const adapter: EntityAdapter<Trend> = createEntityAdapter<Trend>();

export const initialState: State = adapter.getInitialState({ loading: false });

export const trendsReducer = createReducer(
  initialState,
  on(TrendsListPageActions.loadTrends, (state): State => {
    return { ...state, loading: true };
  }),
  on(TrendsApiActions.loadTrendsSuccess, (state, { trends }) => {
    return adapter.setAll(trends, { ...state, loading: false });
  }),
  on(TrendsApiActions.loadTrendsError, (state) => {
    return adapter.removeAll({ ...state, loading: false });
  })
);

export const selectTrendsLoading = (state: State) => state.loading;

const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

// select the array of trend ids
export const selectTrendIds = selectIds;

// select the dictionary of trend entities
export const selectTrendEntities = selectEntities;

// select the array of trends
export const selectAllTrends = selectAll;

// select the total trend count
export const selectTrendTotal = selectTotal;
