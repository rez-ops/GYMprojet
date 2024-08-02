import { User } from './../Models/user.model';
import { Component } from '@angular/core';

declare var $: any; // Déclare jQuery globalement

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  users: User[] = [
    {
      img: "https://bootdey.com/img/Content/avatar/avatar1.png",
      fullName: "John Doe",
      birthday: new Date("2023-01-15"),
      subscriptionType: "Annual",
      email: "john.doe@example.com",
      phoneNumber: "+1234567890",
      subscriptionStatus: "Active",
      subscriptionExpiryDate: new Date("2024-01-14"),
      lastVisit: new Date("2023-07-20"),
      weight: 0,
      height: 0
    },
    {
      img: "https://bootdey.com/img/Content/avatar/avatar2.png",
      fullName: "Jane Smith",
      birthday: new Date("2022-11-20"),
      subscriptionType: "Monthly",
      email: "jane.smith@example.com",
      phoneNumber: "+0987654321",
      subscriptionStatus: "Active",
      subscriptionExpiryDate: new Date("2023-12-19"),
      lastVisit: new Date("2023-07-18"),
      weight: 0,
      height: 0
    },
    {
      img: "https://bootdey.com/img/Content/avatar/avatar3.png",
      fullName: "Alice Jones",
      birthday: new Date("2021-06-10"),
      subscriptionType: "Quarterly",
      email: "alice.jones@example.com",
      phoneNumber: "+1122334455",
      subscriptionStatus: "Inactive",
      subscriptionExpiryDate: new Date("2021-09-09"),
      lastVisit: new Date("2021-09-01"),
      weight: 0,
      height: 0
    }
  ];

  confirmDelete() {
    $('#deleteModal').modal('show');
  }

  deleteEvent() {
    
    $('#deleteModal').modal('hide');
  }

  closeEvent() {
    $('#deleteModal').modal('hide');
  }
}
