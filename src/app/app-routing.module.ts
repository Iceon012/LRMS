import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LabordtrComponent } from './labordtr/labordtr.component';
import { RegisterComponent } from './register/register.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ApplicationComponent } from './application/application.component';
import { DTRComponent } from './dtr/dtr.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { LaborDetailsComponent } from './labor-details/labor-details.component';
import { UploadfrofileComponent } from './uploadfrofile/uploadfrofile.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sidenav',
    component: SidenavComponent,
    children: [{
      path: 'dtr/:did',
      component: DTRComponent, 
    },
    {
      path: 'profile/:did',
      component: ProfileComponent,
    },
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'uploadprofile',
      component: UploadfrofileComponent,
    },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: '/sidenav/home',
    },
  ],
  },
  {
    path: 'laborDetails',
    component: LaborDetailsComponent,
  },
  {
    path: 'labordtr',
    component: LabordtrComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'application',
    component: ApplicationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
