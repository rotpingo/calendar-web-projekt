import { Component } from '@angular/core';
import { Days } from './day-interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  weekDays: Days[] = [
    { id: 1, name: 'Monday'},
    { id: 2, name: 'Tuesday'},
    { id: 3, name: 'Wednesday'},
    { id: 4, name: 'Thursday'},
    { id: 5, name: 'Friday'},
    { id: 6, name: 'Saturday'},
    { id: 7, name: 'Sunday'},

  ];
  today = new Date().getDay(); // 0(Sunday) to 6(Saturday).
  currentDate = new Date().getDate();
  currentMonth = new Date().getMonth();
  currentYear = new Date().getFullYear();



  constructor() {}

}
