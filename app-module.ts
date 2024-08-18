import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DoctorAppointmentComponent } from './doctor-appointment/doctor-appointment.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DoctorAppointmentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
