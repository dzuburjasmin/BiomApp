import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-section',
  templateUrl: './second-section.component.html',
  styleUrls: ['./second-section.component.css']
})
export class SecondSectionComponent implements OnInit {
  images = [
    {text:'Beautiful design, fit for your home',
      url:'assets/images/21.png'
    },
    {text:'Durable stainless steel exterior',
      url:'assets/images/22.png'
    },
    {text:'Non-toxic, BPA free',
      url:'assets/images/23.png'
    }
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
