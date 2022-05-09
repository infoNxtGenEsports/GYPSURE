import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  slides = [

    {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 

    {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'},

    {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 

    {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 

    {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}

  ];


  constructor() { }

  ngOnInit(): void {
  }

}
