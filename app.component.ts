import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { DoctorAppointmentComponent } from './doctor-appointment/doctor-appointment.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent,DoctorAppointmentComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';
}
