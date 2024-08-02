export interface User {
  img: string;
  fullName: string;
  birthday: Date;

  subscriptionType: string;
  phoneNumber: string;
  email: string;
  subscriptionStatus: string;
  subscriptionExpiryDate: Date;
  lastVisit: Date;
  weight: number;
  height: number;
  address?: string; // Add this if needed
}