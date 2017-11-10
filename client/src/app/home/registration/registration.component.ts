import { Component, OnInit } from '@angular/core';
import {DatePickerComponent} from 'ng2-date-picker';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public step=1;
  public company: object={
    title: '',
  	description:'',
    logo:'',
    banner:'',
    website:'',
    createdat:'',
    country:'',
    step:'',
    ceo:'',
    city:'',
  	address:'',
  	cardnumber:'',
  	month:'',
  	year:'',
  	cvc:'',
  	step1saved:false,
  	step2saved:false,
  	step3saved:false
  };
  constructor() { }

  ngOnInit() {
  }
  gotoPage(isNext){
    this.step+=(isNext)?1:-1;
    }
    savegeneral(company: object)
    {
    this.step++;
    this.company = company;
    this.company["step1saved"]=true;
     console.log(this.company);
    }
    savemoreinfo(company: object)
    {
    this.step++;
    this.company = company;
    this.company["step2saved"]=true;
    console.log(this.company);
    }
    savepayment(company: object)
    {
    this.company = company;
    this.company["step3saved"]=true;
     console.log(this.company);
    }
    finish(company: object)
     {  this.step++;
      console.log(this.company);}

    }

