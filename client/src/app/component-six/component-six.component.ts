import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-six',
  templateUrl: './component-six.component.html',
  styleUrls: ['./component-six.component.scss']
})
export class ComponentSixComponent implements OnInit {

    public block6=[
    { hrefs1:"/assets/facebook-logo.png",
      hrefs2:"/assets/TwitterLogo_white.png",
      hrefs3:"/assets/Instagram-white.png",
      hrefs4:"/assets/google-logo.png",
      davidimg:"/assets/David.jpg" ,
      text1:"David Miller",
      text2:"CEO",
      text3:"Kitsch PBR selvage, banjo post-ironic master cleanse hoodie plaid put a bird on it dreamcatcher quinoa. Chia single-origin coffee Etsy, locavore Shoreditch twee whatever messenger."
      },
    
    { hrefs1:"/assets/facebook-logo.png",
    hrefs2:"/assets/TwitterLogo_white.png",
    hrefs3:"/assets/Instagram-white.png",
    hrefs4:"/assets/google-logo.png",
    davidimg:"/assets/Milla.jpg" ,
    text1:"Milla Smith",
    text2:"Designer",
    text3:"Kitsch PBR selvage, banjo post-ironic master cleanse hoodie plaid put a bird on it dreamcatcher quinoa. Chia single-origin coffee Etsy, locavore Shoreditch twee whatever messenger."
  
  },
  { hrefs1:"/assets/facebook-logo.png",
  hrefs2:"/assets/TwitterLogo_white.png",
  hrefs3:"/assets/Instagram-white.png",
  hrefs4:"/assets/google-logo.png",
  davidimg:"/assets/miller.jpg" ,
  text1:"David Miller",
  text2:"Designer",
  text3:"Kitsch PBR selvage, banjo post-ironic master cleanse hoodie plaid put a bird on it dreamcatcher quinoa. Chia single-origin coffee Etsy, locavore Shoreditch twee whatever messenger."
  
  },

  ];
  constructor() { }

  ngOnInit() {
  }

}
