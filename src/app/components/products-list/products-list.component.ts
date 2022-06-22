import { Component, OnInit } from '@angular/core';
import { ProductDto } from 'src/app/models/ProductDto.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  productsList: ProductDto[] = [];

  constructor( private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe ( data => {
      this.productsList = data;
      console.log('this.productsList: ', this.productsList);
    })
  }

}
