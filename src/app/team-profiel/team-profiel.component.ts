// Import necessary Angular and ZXing components
import { Component, OnInit, ViewChild } from '@angular/core';
import { BrowserMultiFormatReader, BarcodeFormat, Result } from '@zxing/library';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { User } from '../Models/user.model';

// Declare jQuery as any for usage in the component
declare var $: any;

@Component({
  selector: 'app-team-profiel',
  templateUrl: './team-profiel.component.html',
  styleUrls: ['./team-profiel.component.css']
})
export class TeamProfielComponent implements OnInit {
  // Personal Info
  height: number | null = null; // Height in cm
  weight: number | null = null; // Weight in kg
  bmi: number | null = null; // Calculated BMI
  bmiDescription: string = ''; // Description based on BMI

  // Hydration Tracking
  waterIntake: number = 0;
  totalWaterIntake: number = 0;

  // Workout Program
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


  user: User = {
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
  

















  // QR Code Scanner
  @ViewChild('scanner') scanner: ZXingScannerComponent | undefined;
  imageSrc: string | ArrayBuffer | null = null;
  qrCodeResult: string | null = null;
  qrCodeResultFromCamera: string | null = null;
  formats: BarcodeFormat[] = [BarcodeFormat.QR_CODE];
  scannerEnabled = false; // Set to false initially
  torchEnabled = false;

  constructor() { }

  ngOnInit(): void {
    this.currentDay = this.getCurrentDay();
    this.updateWorkoutProgram();
  }

  // BMI Calculator
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

  // Hydration Log
  logWaterIntake(): void {
    this.totalWaterIntake += this.waterIntake;
    this.waterIntake = 0;
  }

  // Workout Program
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
    const today = this.getCurrentDay();
    this.currentDay = today;
    console.log(`Today's workout is: ${this.workoutProgram[today]}`);
  }

  // QR Code Scanner
  toggleCamera(): void {
    this.scannerEnabled = !this.scannerEnabled;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        this.imageSrc = e.target?.result ?? null; // Handle null or undefined
        if (this.imageSrc) {
          this.decodeQRCodeFromImage(file);
        }
      };
      reader.readAsDataURL(file);
    }
  }

  decodeQRCodeFromImage(file: File): void {
    const reader = new FileReader();
    reader.onload = (event: ProgressEvent<FileReader>) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (context) {
          canvas.width = img.width;
          canvas.height = img.height;
          context.drawImage(img, 0, 0);

          // Convert canvas to ImageData
          const imageData = context.getImageData(0, 0, img.width, img.height);

          // Decode QR code from the image data
          this.decodeQRCodeFromImageData(imageData);
        }
      };
      img.src = event.target?.result as string; // Ensure the result is a string
    };
    reader.readAsDataURL(file);
  }

  decodeQRCodeFromImageData(imageData: ImageData): void {
    const codeReader = new BrowserMultiFormatReader();
    // Create a canvas to decode the image data
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (context) {
      canvas.width = imageData.width;
      canvas.height = imageData.height;
      context.putImageData(imageData, 0, 0);

      // Convert canvas to a data URL
      const imgSrc = canvas.toDataURL();

      // Use the codeReader to decode the image
      codeReader.decodeFromImage(undefined, imgSrc)
        .then((result: Result) => {
          this.qrCodeResult = result.getText(); // Update with the decoded result
          console.log('Scanned QR code:', this.qrCodeResult);
        })
        .catch(err => {
          console.error('Error decoding QR code:', err);
        });
    }
  }

  onScanSuccess(result: string): void {
    this.qrCodeResultFromCamera = result;
    console.log('Scanned QR code from camera:', this.qrCodeResultFromCamera);
  }

  // Modal Actions
  confirmEdit(): void {
    $('#deleteModal5').modal('show');
  }

  closeEvent(): void {
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
