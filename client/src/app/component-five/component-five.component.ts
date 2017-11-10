import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-five',
  templateUrl: './component-five.component.html',
  styleUrls: ['./component-five.component.scss']
})
export class ComponentFiveComponent implements OnInit {
   public block5=[
     {phsrc:"/assets/001.jpg" },
    {phsrc:"/assets/002.jpg"},
    {phsrc:"/assets/003.jpg"},
     {phsrc:"/assets/004.jpg" },
     {phsrc:"/assets/005.jpg" },
     {phsrc:"/assets/006.jpg" },
     {phsrc:"/assets/007.jpg" },
     {phsrc:"/assets/008.jpg" },
     {phsrc:"/assets/009.jpg" },
     {phsrc:"/assets/010.jpg" },
     {phsrc:"/assets/011.jpg" },
     {phsrc:"/assets/012.jpg" },

    
    ]


  constructor() { }

  ngOnInit() {
  }

}
