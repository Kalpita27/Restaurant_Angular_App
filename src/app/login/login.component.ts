import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit 
{

  loginForm!: FormGroup;
  constructor(private formbuilder: FormBuilder, private _http:HttpClient, private _router:Router ) { }

  ngOnInit(): void 
  {
    this.loginForm = this.formbuilder.group({
      email: ['Marvellous'],
      password: ['123']
    });
  }



  logIn() 
  {
    ///////////this is from sir project to reset the form//////////////
    // console.log(this.loginForm.value);
    //       alert("Marvellous" + ' logged in successfully');
    //       this._router.navigate(['/restaurent']);
    //       this.loginForm.reset(); 
    // ///////////////////////////////////

    this._http.get<any>("https://restaueant-json-server.vercel.app/signup").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      })
      if(user){
        alert("Login is successfull!!!🎉");  //msg for user if the credentials are correct
        // this.loginForm.reset();
        // this._router.navigate(['/restaurent']);

        // //////////This is for netlify////////////////////
        localStorage.setItem("user", JSON.stringify(user));  // ✅ Store user data
      this._router.navigate(['/restaurent']);  // ✅ Redirect after login
        // ////////////////////////////////////////////////

      }
      else{
        alert("User Not Found!!!") //msg to user if credentials are wrong
      }
    },err=>{
      console.error("Login error:", err);  // ✅ Debugging step
    alert("Something went wrong ❌");
    }
    )   
  }
}
