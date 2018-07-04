//authentication.actions.ts
import { Action } from '@ngrx/store';

export enum AuthenticationActionTypes {
  /*REGISTER = '[Authentication] Register',
  REGISTER_SUCCESS = '[Authentication] Register Success',
  REGISTER_FAILURE = '[Authentication] Register Failure',*/
  LOGIN = '[Authentication] Login',
  LOGIN_SUCCESS = '[Authentication] Login Success',
  LOGIN_FAILURE = '[Authentication] Login Failure',
  LOGOUT = '[Authentication] Logout',
}
/*
export class Register implements Action {
  readonly type = AuthenticationActionTypes.REGISTER;
  constructor(public payload: any) {}
}

export class RegisterSuccess implements Action {
  readonly type = AuthenticationActionTypes.REGISTER_SUCCESS;
  constructor(public payload: any) {}
}

export class RegisterFailure implements Action {
  readonly type = AuthenticationActionTypes.REGISTER_FAILURE;
  constructor(public payload: any) {}
}
*/
export class Login implements Action {
  readonly type = AuthenticationActionTypes.LOGIN;
  constructor(public payload: any) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthenticationActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class LoginFailure implements Action {
  readonly type = AuthenticationActionTypes.LOGIN_FAILURE;
  constructor(public payload: any) {}
}

export class Logout implements Action {
  readonly type = AuthenticationActionTypes.LOGOUT;
}

export type All =
  /*| Register
  | RegisterSuccess
  | RegisterFailure*/
  | Login
  | LoginSuccess
  | LoginFailure
  | Logout;