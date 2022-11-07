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
  private id: string;

  constructor(private route: ActivatedRoute,private productService: ProductService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')

    const res = this.productService.getProducts$.subscribe( data => {
      this.product =  data.find(x=> x.name== this.id);
    });

  }

}
