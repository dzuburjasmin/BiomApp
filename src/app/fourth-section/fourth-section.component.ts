import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-section',
  templateUrl: './fourth-section.component.html',
  styleUrls: ['./fourth-section.component.css']
})
export class FourthSectionComponent implements OnInit {
  images = [
    {text:'OCEAN TEAL',
      url:'assets/images/green1.png'
    },
    {text:'WHITE',
      url:'assets/images/white1.png'
    },
    {text:'INK BLACK',
      url:'assets/images/black1.png'
    }
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
