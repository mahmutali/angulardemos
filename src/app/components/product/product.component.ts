import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[]
})
export class ProductComponent implements OnInit {

  currentCategory:number;
  products:Product[];
  productsLoaded:boolean=false;

  constructor(private activatedRoute:ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params=>{
        if (params["categoryid"]) {
          console.log("burası")
          this.currentCategory = params["categoryid"];
          this.getProductsByCategory(this.currentCategory);
        } else {
          this.getProducts();
        }
         
      })
  }

  getProducts(){
    this.productService.getProducts().subscribe(response=>{
      this.products = response
      this.productsLoaded = true;
    });
  }

  getProductsByCategory(categoryId:number){
    this.productService.getProductsByCategory(categoryId).subscribe(response=>{
      this.products = response
      this.productsLoaded = true;
    });
  }

}
