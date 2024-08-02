import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PraicingComponent } from './praicing/praicing.component';
import { SignInSignUpComponent } from './sign-in-sign-up/sign-in-sign-up.component';
import { ProfielComponent } from './profiel/profiel.component';
import { UserListComponent } from './user-list/user-list.component';
import { ActivitiesComponent } from './activities/activities.component';
import { TeamProfielComponent } from './team-profiel/team-profiel.component';

const routes: Routes = [
{
  path:'',component:HomeComponent
},
{
  path:'home',component:HomeComponent
},
{
  path:'userList',component:UserListComponent
},
{
  path:'activities',component:ActivitiesComponent
},
{
path:'signInSignUp',component:SignInSignUpComponent
},
{
  path:"profiel",component:ProfielComponent
},
{
  path:"teamProfiel",component:TeamProfielComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
