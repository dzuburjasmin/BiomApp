import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-seventh-section',
  templateUrl: './seventh-section.component.html',
  styleUrls: ['./seventh-section.component.css']
})
export class SeventhSectionComponent implements OnInit {
  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    freeMode: true,
    grabCursor: true,
    loop: false,
    breakpoints: {
      1224: {
        slidesPerView: 5,
        spaceBetween: 20
      },
      1050: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      400: {
        slidesPerView: 2,
        spaceBetween: 10
      }
    }
  };
  images = [
    {
      url:'assets/images/71.png'
    },
    {
      url:'assets/images/72.png'
    },
    {
      url:'assets/images/73.png'
    },
    {
      url:'assets/images/74.png'
    },
    {
      url:'assets/images/75.png'
    },
    {
      url:'assets/images/76.png'
    }
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
