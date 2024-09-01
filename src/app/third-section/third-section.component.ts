import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-third-section',
  templateUrl: './third-section.component.html',
  styleUrls: ['./third-section.component.css']
})
export class ThirdSectionComponent implements OnInit {
images = [
  {text:'living room',
    url:'assets/images/lroom.png'
  },
  {text:'office',
    url:'assets/images/office.png'
  },
  {text:'kitchen',
    url:'assets/images/kitchen.png'
  },
  {text:'bathroom',
    url:'assets/images/bathroom.png'
  }
  ];

  swiperConfig: SwiperOptions = {
    height: 200,
    slidesPerView: 1,        
    spaceBetween: 20,        
    loop: false,             
    grabCursor: false,       
    freeMode: {
      enabled: true,
    },      
    scrollbar: {             
      draggable: true
    },
    initialSlide: 1,
    centeredSlides: false,
    breakpoints:{
      1950:{
        slidesPerView:3,
        //spaceBetween: -200,

      },
      1470:{
        //: -350,
        slidesPerView: 2
      },
      1024:{
        //: -100,
        slidesPerView: 2
      },
      990:{
        slidesPerView: 2
      }
    },
    setWrapperSize: true,
    slidesOffsetAfter: -360
    };
  constructor() { }

  ngOnInit(): void {
  }

}
