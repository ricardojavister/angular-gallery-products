import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Product } from '../model/product';
import products from '../../assets/SimpliSafe.json';
import { of, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public productList:{name:string, price:string, thumbnail_image: string, header_image:string, features:string[]}[] = products;
  public getProducts$ : Observable<Product[]> = of (products);

  constructor() { }

}
