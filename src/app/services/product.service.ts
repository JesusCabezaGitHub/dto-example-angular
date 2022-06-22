import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductDto } from '../models/ProductDto.model';
import { ProductProxyService } from './product-proxy.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private productProxyService: ProductProxyService) { }

  getProducts(): Observable<ProductDto[]> {
    return this.productProxyService.getProducts()
    .pipe(
      map(
        (response: any[]) => {
          let listProducts: ProductDto[] = [];
          const data = response;
          data.forEach( (item: any) => {
            const product: ProductDto = {
              title: item.title_product,
              img: item.image_pro,
              description: item.description_product,
              price: item.price_p
            }
            listProducts = [...listProducts, product]
          })
        return listProducts;
      })
    )
  }

  addProduct() {

  }
}
