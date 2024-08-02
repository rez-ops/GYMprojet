import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PraicingComponent } from './praicing/praicing.component';
import { TeamComponent } from './team/team.component';
import { SignInSignUpComponent } from './sign-in-sign-up/sign-in-sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfielComponent } from './profiel/profiel.component';
import { UserListComponent } from './user-list/user-list.component';
import { ActivitiesComponent } from './activities/activities.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { TeamProfielComponent } from './team-profiel/team-profiel.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    PraicingComponent,
    TeamComponent,
    SignInSignUpComponent,
    ProfielComponent,
    UserListComponent,
    ActivitiesComponent,
    TeamProfielComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule,
    ZXingScannerModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
