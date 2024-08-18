import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-appointment',
  standalone: true,
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.css']
})
export class DoctorAppointmentComponent {
  getStarted() {
    console.log('Get Started clicked!');
    // Add navigation or other logic here
  }
}
