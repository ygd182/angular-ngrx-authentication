//authentication.reducers.ts
import { User } from '../../models/user';
import { AuthenticationActionTypes, All } from '../actions/authentication.actions';

export interface State {
  // is the user authenticated?
  isAuthenticated: boolean;
  // if authenticated, there should be a user object either from a dispatched action 
  // or due to the initial state loaded from localStorage
  user: User | null;
  errorMessage: string | null;
}

//set the initial state with localStorage
export const initialState: State = {
  isAuthenticated: localStorage.getItem('token')!==null,
  user: {
          token: localStorage.getItem('token'),
          email: localStorage.getItem('email')
        },
  errorMessage: null
};

export function reducer(state = initialState, action: All): State {
  switch (action.type) {
    /*case AuthenticationActionTypes.REGISTER_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          token: action.payload.token,
          email: action.payload.email
        },
        errorMessage: null
      };
    }
    case AuthenticationActionTypes.REGISTER_FAILURE: {
      return {
        ...state,
        errorMessage: 'The email is already in use.'
      };
    }*/
    case AuthenticationActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          token: action.payload.token,
          email: action.payload.email
        },
        errorMessage: null
      };
    }
    case AuthenticationActionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        errorMessage: 'Wrong credentials.'
      };
    }
    case AuthenticationActionTypes.LOGOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}