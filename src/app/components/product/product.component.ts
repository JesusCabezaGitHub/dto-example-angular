import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() title: string = '';
  @Input() img: string = '';
  @Input() description: string = '';
  @Input() price: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
