import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  foodDetails: any;

  constructor() { }

  FastFood = [
    {
      id: 1,
      menuName : "Burger & fries",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/FastF1.jpg"
    },
    {
      id: 2,
      menuName : "Onion-Garlic Pizza",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/FastF2.jpg"
    },
    {
      id: 3,
      menuName : "Red Pasta",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/FastF3.jpg"
    },
    {
      id: 4,
      menuName : "Shezvaan Noodles",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/FastF4.jpg"
    },
    {
      id: 5,
      menuName : "Manchurian",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/FastF5.jpg"
    },
    {
      id: 6,
      menuName : "Maggie",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/FastF6.jpg"
    },
    {
      id: 7,
      menuName : "Salted fries",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/FastF7.jpg"
    },
    {
      id: 8,
      menuName : "White Pasta",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/FastF8.jpg"
    },
    {
      id: 9,
      menuName : "Veg Pizza",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/FastF9.jpg"
    },
    {
      id: 10,
      menuName : "Peri Peri Fries",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/FastF10.jpg"
    },
  ]

  Coffee =[
    {
      id: 1,
      menuName : "Hot Coffee",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/Coffee.jpg"
    },
    {
      id: 2,
      menuName : "Cold Coffee",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/coffee1.jpg"
    },
    {
      id: 3,
      menuName : "Oreo Milkshake",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/coffee2.jpg"
    },
    {
      id: 4,
      menuName : "Brownie Milkshake",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/coffee3.png"
    },
    {
      id: 5,
      menuName : "Black Coffee",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/coffee4.jpg"
    },
    {
      id: 6,
      menuName : "Coffee",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/coffee5.jpg"
    },
    {
      id: 7,
      menuName : "Chocolate Milkshake",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/coffee6.jpg"
    },
    {
      id: 8,
      menuName : "Black Tea",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/coffee7.jpg"
    },

  ]

  SouthIndian =
  [
    { id: 1,
      menuName : "Plain Dosa",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/South1.jpg"
    },
    {
      id: 2,
      menuName : "Onion Uttapa",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/south2.jpg"
    },
    {
      id: 3,
      menuName : "Spounge Dosa",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/south3.webp"
    },
    {
      id: 4,
      menuName : "South Combo",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/south4.jpg"
    },
    {
      id: 5,
      menuName : "Idali Vada",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/south5.jpeg"
    },
    {
      id: 6,
      menuName : "Masala Dosa",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/south6.jpg"
    },
    {
      id: 7,
      menuName : "Idali Sambar",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/south7.jpg"
    },
    {
      id: 8,
      menuName : "Appe",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/south8.jpg"
    }
  ]

  StreetFood =
  [
    {
      id: 1,
      menuName : "Vadapav",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/street.jpg"
    },
    {
      id: 2,
      menuName : "Pavbhaji",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/street1.jpg"
    },
    {
      id: 3,
      menuName : "Dahi puri",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/street2.webp"
    },
    {
      id: 4,
      menuName : "Bhel Puri",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/street3.jpg"
    },
    {
      id: 5,
      menuName : "Pohe",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/street4.jpg"
    },
    {
      id: 6,
      menuName : "Bhaje",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/street5.jpg"
    },
    {
      id: 7,
      menuName : "Bhaje",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/street6.jpg"
    },
    {
      id: 8,
      menuName : "Samosa",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/street7.jpg"
    },
    {
      id: 9,
      menuName : "Misal Pav",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/street8.jpg"
    },
    {
      id: 10,
      menuName : "PaniPuri",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/street9.png"
    },
    {
      id: 11,
      menuName : "Samosa Chat",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/street10.jpg"
    },
    {
      id: 12,
      menuName : "Kanda Bhaji",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/street11.jpg"
    },
    {
      id: 13,
      menuName : "Chaha",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/street12.jpg"
    },
    {
      id: 14,
      menuName : "Dhokla",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/street13.jpg"
    }
  ]

  Rolls =
  [
    {
      id: 1,
      menuName : "Veg Roll",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/roll.jpg"
    },
    {
      id: 2,
      menuName : "Paneer Roll",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/roll1.jpg"
    },
    {
      id: 3,
      menuName : "Veg Cheese Roll",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/roll2.jpg"
    },
    {
      id: 4,
      menuName : "Paneer Cheese Roll",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/roll3.png"
    },
    {
      id: 5,
      menuName : "Aloo Roll",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/roll4.jpg"
    },
    {
      id: 6,
      menuName : "Toasted Veg Sandwitch",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/roll5.jpg"
    },
    {
      id: 7,
      menuName : "Veg Grilled Sandwitch",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/roll6.webp"
    },
    {
      id: 8,
      menuName : "Veg Cheese Grilled Sandwitch",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/roll7.jpg"
    },
    {
      id: 9,
      menuName : "Sandwitch",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/roll8.jpg"
    },
    {
      id: 10,
      menuName : "Paneer Bhurji Roll",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/roll9.jpg"
    },
  ]

  Desserts =
  [
    {
      id: 1,
      menuName : "Orange Muffins",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/dessert.jpg"
    },
    {
      id: 2,
      menuName : "Strawberry Milkshake",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/dessert1.jpg"
    },
    {
      id: 3,
      menuName : "Pastry",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/dessert2.jpg"
    },
    {
      id: 4,
      menuName : "Chocolate Brownie Milkshake",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/dessert3.jpg"
    },
    {
      id: 5,
      menuName : "Strawberry Pastry",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/dessert4.jpg"
    },
    {
      id: 6,
      menuName : "Donuts",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/dessert5.jpg"
    },
    {
      id: 7,
      menuName : "Black Forest Pastry",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/dessert6.jpg"
    },
    {
      id: 8,
      menuName : "Hot Brownie",
      menuDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      menuPrice: 120,
      menuImg: "../../../assets/img/dessert7.jpg"
    },
  ]
}
