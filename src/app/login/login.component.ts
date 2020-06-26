import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl,FormGroupDirective,FormBuilder,FormGroup,NgForm,Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  nickname='';
  ref=firebase.database().ref('users/');
  matcher =new MyErrorStateMatcher();


  constructor(private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit() {
  }

}
