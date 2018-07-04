//login.component.ts
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from './../models/user';
import { AppState, selectAuthState } from './../store/app.states';
import { Login } from './../store/actions/authentication.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  getState: Observable<any>;
  errorMessage: string = null;

  constructor(private store: Store<AppState>) {
   this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.getState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    });
  }

  onSubmit(): void {
    const actionPayload = {
      email: this.user.email,
      password: this.user.password
    };
    this.store.dispatch(new Login(actionPayload));
  }

}
