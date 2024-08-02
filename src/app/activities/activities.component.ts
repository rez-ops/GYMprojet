import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Card } from './../Models/activitiesCard.model';

declare var $: any;

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  selectedCard!: Card;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    // Initial setup if needed
  }

  showActivitiePage(card: Card) {
    this.selectedCard = card;
    $('#showActivitiesPage').modal('show');
    this.cdr.detectChanges();  // Manually trigger change detection
  }

  close() {
    $('#showActivitiesPage').modal('hide');
    $('#showAddActivities').modal('hide');
  }

  showAddActivities() {
    $('#showAddActivities').modal('show');
    }
  
 
  
  
  
  
  
  
  
  
  cards: Card[] = [
    {
      img: "https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp",
      activityName: "Yoga",
      description: "A practice that combines breath control, meditation, and physical poses to improve flexibility, strength, and mental well-being.",
      DureeDuCours: "60 minutes",
      dateDuSeonce: "Every Monday at 6 PM",
      materielUtilise: "Yoga mat, blocks",
      intesite: "Low",
      tenueRecommandee: "Comfortable, flexible clothing",
      recommandations: "Stay hydrated and bring a towel."
    },
    {
      img: "https://mdbcdn.b-cdn.net/img/new/standard/nature/115.webp",
      activityName: "Running",
      description: "A cardiovascular exercise that improves heart health, burns calories, and boosts mood through the release of endorphins.",
      DureeDuCours: "Variable",
      dateDuSeonce: "Every Friday at 7 AM",
      materielUtilise: "Running shoes",
      intesite: "Variable",
      tenueRecommandee: "Lightweight, moisture-wicking clothing",
      recommandations: "Stretch before and after running."
    },
    {
      img: "https://mdbcdn.b-cdn.net/img/new/standard/nature/116.webp",
      activityName: "Cycling",
      description: "An aerobic activity that enhances cardiovascular fitness, builds muscle strength, and improves joint mobility.",
      DureeDuCours: "60 minutes",
      dateDuSeonce: "Every Saturday at 8 AM",
      materielUtilise: "Bicycle, helmet",
      intesite: "Medium",
      tenueRecommandee: "Cycling shorts and a breathable top",
      recommandations: "Carry water and wear a helmet."
    },
    {
      img: "https://mdbcdn.b-cdn.net/img/new/standard/nature/117.webp",
      activityName: "Swimming",
      description: "A full-body workout that improves cardiovascular health, builds endurance, and strengthens muscles with minimal impact on the joints.",
      DureeDuCours: "45 minutes",
      dateDuSeonce: "Every Sunday at 9 AM",
      materielUtilise: "Swimsuit, goggles",
      intesite: "Medium",
      tenueRecommandee: "Swimwear",
      recommandations: "Warm up before swimming and stay hydrated."
    },
    {
      img: "https://mdbcdn.b-cdn.net/img/new/standard/nature/118.webp",
      activityName: "Boxing",
      description: "A high-intensity workout that combines cardio, strength training, and agility to improve overall fitness and coordination.",
      DureeDuCours: "60 minutes",
      dateDuSeonce: "Every Monday and Thursday at 6 PM",
      materielUtilise: "Boxing gloves, hand wraps",
      intesite: "High",
      tenueRecommandee: "Athletic wear",
      recommandations: "Ensure proper form and stay hydrated."
    },
    {
      img: "https://mdbcdn.b-cdn.net/img/new/standard/nature/119.webp",
      activityName: "Zumba",
      description: "A dance-based exercise program that combines Latin and international music with dynamic, fun, and effective fitness routines.",
      DureeDuCours: "50 minutes",
      dateDuSeonce: "Every Wednesday and Friday at 5 PM",
      materielUtilise: "None",
      intesite: "Medium to High",
      tenueRecommandee: "Comfortable, breathable clothing",
      recommandations: "Bring water and a towel for sweat."
    }
  ];
}
