import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public product: Product;
  constructor(private route: ActivatedRoute,private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts$.subscribe( data => {
      this.product =  data.find(x=> x.name== this.route.snapshot.paramMap.get('id'));
    });
  }

}
