import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-three',
  templateUrl: './component-three.component.html',
  styleUrls: ['./component-three.component.scss']
})
export class ComponentThreeComponent implements OnInit {

  block3=[
    { photoromb:"/assets/h1.png", text:"A Real Design" },
    {photoromb:"/assets/h2.png",text:"Breath Colour"},
    {photoromb:"/assets/h3.png",text:"Project"},
    {photoromb:"/assets/h5.png",text:"Studio"},
    {photoromb:"/assets/h4.png",text:"Campaign"},
    ];

  constructor() { }

  ngOnInit() {
  }

}
