import { createFeatureSelector } from '@ngrx/store';
import * as authentication from './reducers/authentication.reducers';

export interface AppState {
  authenticationState: authentication.State;
}

export const reducers = {
  authentication: authentication.reducer
};

export const selectAuthState = createFeatureSelector<AppState>('authentication');