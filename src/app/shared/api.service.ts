import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { RestaurentData } from '../restaurent-dash/restaurent.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService 
{
  [x: string]: any;
  
  addRestaurent(restaurentModelObj: RestaurentData) 
  {
    throw new Error('Method not implemented.');  //add logic
  }

  private baseUrl = "https://restaueant-json-server.vercel.app";  // ✅ Use the deployed JSON server

  constructor(private _http: HttpClient) {}

  // POST request
  postRestaurent(data: any) {
    return this._http.post<any>(`${this.baseUrl}/posts`, data).pipe(map((res: any) => {
      return res;
    }));
  }

  // GET request
  getRestaurent() {
    return this._http.get<any>(`${this.baseUrl}/posts`).pipe(map((res: any) => {
      return res;
    }));
  }

  // DELETE request
  deleteRestaurant(id: number) {
    return this._http.delete<any>(`${this.baseUrl}/posts/${id}`).pipe(map((res: any) => {
      return res;
    }));
  }

  // UPDATE request
  updateRestaurant(id: number, data: any) {
    return this._http.put<any>(`${this.baseUrl}/posts/${id}`, data).pipe(map((res: any) => {
      return res;
    }));
  }

  // GET a restaurant by ID
  getRestaurentById(id: number) {
    return this._http.get<any>(`${this.baseUrl}/posts/${id}`).pipe(map((res: any) => {
      return {
        id: res.id,
        name: res.name,
        address: res.address,
        email: res.email,
        mobile: res.mobile,
        backgroundImage: res.backgroundImage,
        services: res.services,
        menu: res.menu,              
        customersVisited: res.customersVisited,  
        monthlyRevenue: res.monthlyRevenue
      };
    }));
  }


//   constructor(private _http: HttpClient) { }

//   //POST request
//   postRestaurent(data:any ) 
//   {
//     return this._http.post<any>("http://localhost:3000/posts", data).pipe(map((res:any)=>{
//       return res;
//     }))
//   }

//   //GET request
//   getRestaurent() 
//   {
//     return this._http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{
//       return res;
//     }));
//   }

//   //delete request
//   deleteRestaurant(id:number) 
//   {
//     return this._http.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res:any)=>{
//       return res;
//     }));
//   }

//   //update request
//   updateRestaurant(id: number, data: any) 
//   {
//     return this._http.put<any>("http://localhost:3000/posts/"+id,data).pipe(map((res:any)=>{
//       return res;
//     }));
//   }

//   getRestaurentById(id: number) {
//     return this._http.get<any>("http://localhost:3000/posts/" + id).pipe(map((res: any) => {
//       return {
//         id: res.id,
//         name: res.name,
//         address: res.address,
//         email: res.email,
//         mobile: res.mobile,
//         backgroundImage: res.backgroundImage,
//         services: res.services,
//         menu: res.menu,              // New field for menu (array of items with prices)
//         customersVisited: res.customersVisited,  // New field for customers visited
//         monthlyRevenue: res.monthlyRevenue       // New field for monthly revenue
//       };
//     }));
//   }
}
