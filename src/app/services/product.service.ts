import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  apiUrl :string ="http://localhost:3000/products";

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<Product[]>{
     return this.httpClient.get<Product[]>(this.apiUrl);
  }

  getProductsByCategory(categoryId:number):Observable<Product[]>{
    console.log(this.apiUrl+"?categoryId="+categoryId)
    return this.httpClient.get<Product[]>(this.apiUrl+"?categoryId="+categoryId);
 }


}


//{
  data:[],
  success:true,
  message:"dfgdh"
}