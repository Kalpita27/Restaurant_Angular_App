import { Component, OnInit } from '@angular/core';
import { RestaurentData } from '../restaurent-dash/restaurent.model';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-reastaurant-details',
  templateUrl: './reastaurant-details.component.html',
  styleUrls: ['./reastaurant-details.component.css']
})
export class ReastaurantDetailsComponent implements OnInit {
  restaurentModelObj : RestaurentData = new RestaurentData;
  allRestaurentData: any;

  constructor(private api:ApiService) {}

  ngOnInit(): void {
    this.getAllData();
  }
  getAllData()
  {
    this.api.getRestaurent().subscribe(res => {
      this.allRestaurentData= res;
    }, err=>{
      console.log(err);
    })
  }
}
