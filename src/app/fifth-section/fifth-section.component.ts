import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifth-section',
  templateUrl: './fifth-section.component.html',
  styleUrls: ['./fifth-section.component.css']
})
export class FifthSectionComponent implements OnInit {
  images = [
    {text:'100% biodegradable',
      url:'assets/images/biored.png'
    },
    {text:'Plastic-free',
      url:'assets/images/plasticfree.png'
    },
    {text:'100% plant-based',
      url:'assets/images/plant.png'
    }
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
