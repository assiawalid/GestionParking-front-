import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay:true,
    autoplaySpeed:1000,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  slideData:any[]=[
    {
      name:'name1',
      url:'assets/img/partner-logo-1.png'
    },
    {
      name:'name1',
      url:'assets/img/partner-logo-2.png'
    },
    {
      name:'name1',
      url:'assets/img/partner-logo-3.png'
    },
    {
      name:'name1',
      url:'assets/img/partner-logo-4.png'
    },
    {
      name:'name1',
      url:'assets/img/partner-logo-3.png'
    },
    {
      name:'name1',
      url:'assets/img/partner-logo-3.png'
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
