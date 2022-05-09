import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-one',
  templateUrl: './product-one.component.html',
  styleUrls: ['./product-one.component.css']
})
export class ProductOneComponent implements OnInit {
  image:String = '../../assets/images/image 25.png'
  constructor() { }

  ProductImage:String = '../../../assets/advantage-image.jpg'

  ngOnInit(): void {
  }

}
