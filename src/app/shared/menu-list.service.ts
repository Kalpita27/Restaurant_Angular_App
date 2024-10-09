import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuListService {


  constructor() { }
  foodDetails = 
  [
    {
      id: 1,
      foodName : "Fast Food",
      foodDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      foodPrice: 120,
      foodImg: "../../../assets/img/FastF1.jpg"
    },
    
    {
      id: 2,
      foodName : "Coffee",
      foodDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      foodPrice: 120,
      foodImg: "../../../assets/img/Coffee.jpg"
    },
    {
      id: 3,
      foodName : "Sandwitch",
      foodDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      foodPrice: 120,
      foodImg: "../../../assets/img/sandwitch.jpg"
    },
    {
      id: 4,
      foodName : "Milkshake",
      foodDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      foodPrice: 120,
      foodImg: "../../../assets/img/milkshake.jpg"
    },
    {
      id: 5,
      foodName : "Pizza",
      foodDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      foodPrice: 120,
      foodImg: "../../../assets/img/pizza2.jpg"
    },
    {
      id: 6,
      foodName : "Fries",
      foodDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      foodPrice: 120,
      foodImg: "../../../assets/img/fries1.jpg"
    },
    {
      id: 7,
      foodName : "Fries",
      foodDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      foodPrice: 120,
      foodImg: "../../../assets/img/fries1.jpg"
    }, 
  ]
  Menu = [
    {
      id: 1,
      menuName : "Fast Food",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/FastF2.jpg"
    },
    {
      id: 2,
      menuName : "Coffee & Milkshake",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/Coffee.jpg"
    },
    {
      id: 3,
      menuName : "South Indian",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/south6.jpg"
    },
    {
      id: 4,
      menuName : "Street Food",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/street.jpg"
    },
    {
      id: 5,
      menuName : "Rolls & Sandwitch",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/roll.jpg"
    },
    {
      id: 6,
      menuName : "Desserts & Juices",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/dessert.jpg"
    },
  ]
}
