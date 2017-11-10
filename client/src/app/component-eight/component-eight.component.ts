import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-eight',
  templateUrl: './component-eight.component.html',
  styleUrls: ['./component-eight.component.scss']
})
export class ComponentEightComponent implements OnInit {
  public block8=[
    {number:"26,412",text:"PAGE VIEWS"},
    {number:"15,362",text:"COFFEE CONSUMED"},
    {number:"21,568",text:"PROJECT FINISHED"},
    {number:"26,854",text:"PIZZA'S EATEN"},
    
    ]

  constructor() { }

  ngOnInit() {
  }

}
