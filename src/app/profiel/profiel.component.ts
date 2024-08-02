import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user.model';
declare var $: any;

@Component({
  selector: 'app-profiel',
  templateUrl: './profiel.component.html',
  styleUrls: ['./profiel.component.css']
})
export class ProfielComponent implements OnInit {
  height: number | null = null; // Height in cm
  weight: number | null = null; // Weight in kg
  bmi: number | null = null; // Calculated BMI
  bmiDescription: string = ''; // Description based on BMI

//**************************************************************************** */
user: User = {
  img: "https://bootdey.com/img/Content/avatar/avatar1.png",
  fullName: "John Doe",
  birthday: new Date("2003-01-15"),
  subscriptionType: "Annual",
  email: "john.doe@example.com",
  phoneNumber: "+1234567890",
  subscriptionStatus: "Active",
  subscriptionExpiryDate: new Date("2024-01-14"),
  lastVisit: new Date("2023-07-20"),
  weight: 75, // Example value
  height: 175, // Example value
  address: "California, USA" // Example value
};
  

  //*******************  Suivi de l'hydratation   ******************************
  waterIntake: number = 0;
  totalWaterIntake: number = 0;

  logWaterIntake() {
    this.totalWaterIntake += this.waterIntake;
    this.waterIntake = 0;
  }

  //*******************  BMI Calculator   ******************************
  calculateBMI(): void {
    if (this.height && this.weight) {
      const heightInMeters = this.height / 100; // Convert cm to meters
      this.bmi = this.weight / (heightInMeters * heightInMeters);
      this.bmiDescription = this.getBMIDescription(this.bmi);
    } else {
      this.bmi = null;
      this.bmiDescription = 'Please enter both height and weight.';
    }
  }

  getBMIDescription(bmi: number): string {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      return 'Overweight';
    } else {
      return 'Obesity';
    }
  }

  //*******************  Workout Program   ******************************
  workoutDays: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  workoutProgram: { [key: string]: string } = {
    'Monday': 'Push1',
    'Tuesday': 'Pull1',
    'Wednesday': 'Legs1',
    'Thursday': 'Rest',
    'Friday': 'Push2',
    'Saturday': 'Pull2',
    'Sunday': 'Legs2'
  };

  currentDay: string = '';

  ngOnInit(): void {
    this.currentDay = this.getCurrentDay();
    this.updateWorkoutProgram();
  }

  getCurrentDay(): string {
    const days = this.workoutDays;
    const today = new Date().getDay(); // 0: Sunday, 1: Monday, etc.
    return days[today];
  }

  markMissedWorkout(): void {
    const today = this.getCurrentDay();
    this.shiftWorkouts(today);
    this.updateWorkoutProgram();
  }

  shiftWorkouts(missedDay: string): void {
    const days = this.workoutDays;
    const missedIndex = days.indexOf(missedDay);

    if (missedIndex !== -1) {
      const shiftedProgram: { [key: string]: string } = {};

      for (let i = 0; i < days.length; i++) {
        let index = (i + missedIndex + 1) % days.length;
        shiftedProgram[days[i]] = this.workoutProgram[days[index]];
      }

      this.workoutProgram = shiftedProgram;
      this.currentDay = this.getCurrentDay(); // Update to reflect current day after shift
    }
  }

  updateWorkoutProgram(): void {
    // Met à jour le programme d'entraînement en fonction du jour actuel
    const today = this.getCurrentDay();
    
    // Affiche le jour actuel et son programme dans la vue
    this.currentDay = today;
  
    // Optionnel : Logique supplémentaire si nécessaire lors de la mise à jour du programme
    // Par exemple, vous pouvez effectuer des opérations spécifiques lorsque le programme est mis à jour
    console.log(`Today's workout is: ${this.workoutProgram[today]}`);
  }

  














  
  confirmEdit() {
    $('#deleteModal5').modal('show');
  }

 

  closeEvent() {
    $('#deleteModal5').modal('hide');
  }

















  getAge(dateOfBirth: Date): number {
    const today = new Date();
    let age = today.getFullYear() - dateOfBirth.getFullYear();
    const monthDifference = today.getMonth() - dateOfBirth.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dateOfBirth.getDate())) {
      age--;
    }
    return age;
  }
}












