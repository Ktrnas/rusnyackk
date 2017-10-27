import { Component, OnInit } from '@angular/core';

import{Router } from '@angular/router';

import{
  FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
  


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    let greeting =alert("Hello! You need to sign in");
  }
SignIn(e){
  e.preventDefault();
  console.log(e);
  var username = e.target.elements[0].value;
  var password = e.target.elements[1].value;

  if (username=='root' && password == 'root' ){
    
    
      this.router.navigate(['']);

  }
else{
  alert ('Wrong data, try again  please.');
}

}

}
