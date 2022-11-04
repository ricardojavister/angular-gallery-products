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

  // getProducts(): Observable<RootObject> {
  //   let headers = new HttpHeaders();
  //   headers = headers.set('X-Master-Key', '$2b$10$ghNHmZWM5nvdrV5tDL6akuKN6JanJ9/iG9vAa4F1yJF8X/ccv3o9C');
  //   const url ='https://api.jsonbin.io/v3/b/62b1fb13449a1f382113d677'
  //   return this.httpClient.get<RootObject>(
  //     url, { headers: headers }
  //   );
  // }

}
