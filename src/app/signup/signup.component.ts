import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit 
{
  signupForm!: FormGroup
  constructor(private formbuilder: FormBuilder, private _http:HttpClient, private _router:Router) 
  { }

  ngOnInit(): void 
  {
    this.signupForm = this.formbuilder.group({
      name:['', Validators.required],
      email:['', Validators.required],
      mobile:['', Validators.required],
      password: ['', Validators.required]
    })
  }

  signUp()
  {
    this._http.post<any>('https://restaueant-json-server.vercel.app/signup',this.signupForm.value).subscribe(res=>{
      console.log(res)
      alert('Signup Successfully');
      this.signupForm.reset();
      this._router.navigate(['/login']);
    }), (err: any)=>{
      console.log(err);
      alert('Signup Error');
    }
  }

}
