import { createAction, props } from '@ngrx/store';

import { Trend } from '../../models/trend.model';

export const loadTrendsSuccess = createAction(
  '[Trends/API] Load Trends Success',
  props<{ trends: Trend[] }>()
);

export const loadTrendsError = createAction('[Trends/API] Load Trends Error');
