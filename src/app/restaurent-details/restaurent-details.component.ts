import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { MenuListService } from '../shared/menu-list.service';
import { MenuService } from '../shared/menu.service';

@Component({
  selector: 'app-restaurent-details',
  templateUrl: './restaurent-details.component.html',
  styleUrls: ['./restaurent-details.component.css']
})
export class RestaurentDetailsComponent implements OnInit{
  restaurentId!: number;
  restaurentDetails: any;
  backgroundImage: string = '';

  foodData: any;
  explore: any;

  getId:any;
  menuData: any;
  getMenuId: any;

  CData: any;
  SData:any;
  SFData:any;
  RData:any;
  DData:any;

  constructor(private route: ActivatedRoute, private api: ApiService, private service: MenuListService,
    private param:ActivatedRoute, private menuService: MenuService) { }

  ngOnInit(): void {
    // Get the restaurant ID from the URL
    this.restaurentId = this.route.snapshot.params['id'];

    // Fetch the restaurant details using the ID
    this.getRestaurentDetails(this.restaurentId);

    this.foodData = this.service.foodDetails;
  this.explore = this.service.Menu;

  this.getMenuId = this.param.snapshot.paramMap.get('id');
  console.log(this.getMenuId,'getmenu');  
  
  if(this.getMenuId)
  {
    this.menuData = this.service.foodDetails.filter((value: { id: any; })=>{
     return value.id == this.getMenuId
    });
    console.log(this.menuData,'menudata>>');  
  }


  this.menuData = this.menuService.FastFood;
      this.CData = this.menuService.Coffee;
      this.SData = this.menuService.SouthIndian;
      this.SFData = this.menuService.StreetFood;
      this.RData = this.menuService.Rolls;
      this.DData = this.menuService.Desserts;
  }

  getRestaurentDetails(id: number) {
    this.api.getRestaurentById(id).subscribe(res => {
      this.restaurentDetails = res;
      this.backgroundImage = res.backgroundImage; // Set the background image
    }, err => {
      console.log('Error fetching restaurant details', err);
    });
  }


  // getBackgroundImage(): string {
  //   switch (this.restaurentId) {
  //     case 1:
  //       return "assets/img/bg.jpg";
  //     case 2:
  //       return "assets/img/restaurant2.jpg";
  //     case 3:
  //       return "assets/img/restaurant3.jpg";
  //     default:
  //       return "assets/img/default.jpg";
  //   }
  // }
}
