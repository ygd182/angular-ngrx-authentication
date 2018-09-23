//app.routes.ts
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuardService } from './services/authentication-guard.service';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'  },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthenticationGuardService] }
];

export const Routing = RouterModule.forRoot(routes);