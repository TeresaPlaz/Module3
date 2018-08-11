import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foodArray: Array<object>;
  pattern: string; 

  constructor() { }

  ngOnInit() {
    this.foodArray = foods;
  }
}