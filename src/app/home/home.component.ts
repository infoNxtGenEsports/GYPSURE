import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Image:String = "../assets/images/newBackground.png"

  constructor() { }

  ngOnInit(): void {
  }

  // myImage:String = "https://i.ibb.co/28tnNn6/gyp-sure-background-image.png"
  myImage:String = "../../assets/images/gyp-sure-background-image.png"
}
