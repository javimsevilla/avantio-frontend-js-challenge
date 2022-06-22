import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromLoaderReducer from './loader.reducer';

export interface State {
  loader: fromLoaderReducer.State;
}

export const reducers: ActionReducerMap<State> = {
  loader: fromLoaderReducer.reducer,
};

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = environment.production
  ? []
  : [debug];
