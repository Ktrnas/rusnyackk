import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss']
})
export class ComponentTwoComponent implements OnInit {
 
  public block2=[
    { text1:"Contact"},
    {text1:"Sliders"},
    {text1:"Features"},
    {text1:"Blog"},
    {text0:"Shop"},
    {text0:"Elements"},
    {text0:"Portfolio"},
    {text0:"Sevices"},
    {text0:"About us"},
    {text0:"Headers"},
    {text0:"Home"},
    ]
    

  constructor() { }
formLink='/form';

  ngOnInit() {
  }

}
