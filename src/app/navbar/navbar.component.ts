import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
goToActivities() {
  this.router.navigate(['/activities'])
}
  constructor(private router:Router){ }
  goToHome(){
    this.router.navigate(['/home'])
    
      }
  goToSign(){
    this.router.navigate(['/signInSignUp'])
  }    


}
