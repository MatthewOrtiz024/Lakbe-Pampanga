import { Component } from '@angular/core';
import Swal from 'sweetalert2';  // Import SweetAlert2

@Component({
  selector: 'app-start-up',
  templateUrl: './start-up.component.html',
  styleUrls: ['./start-up.component.css']
})
export class StartUpComponent {

  // This method is triggered when the "START TRIP" button is clicked
  startTrip() {
    Swal.fire({
      title: 'What would you like to do?',
      text: 'You can either plan your trip or start navigation!',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Navigate',
      cancelButtonText: 'Plan',
    }).then((result) => {
      if (result.isConfirmed) {
        // User clicks 'Navigate'
        Swal.fire('Navigating...', 'Redirecting to the navigation page...', 'success');
        // Example of a navigation redirect (using Angular's Router)
        window.location.href = '/navigate';  // Adjust URL as needed
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // User clicks 'Plan'
        Swal.fire('Planning...', 'Redirecting to the planning page...', 'success');
        // Example of a plan page redirect (using Angular's Router)
        window.location.href = '/plan-now';  // Adjust URL as needed
      }
    });
  }
}
