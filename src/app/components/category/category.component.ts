import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  title:string="Kategoriler";

  //type-safe
  categories : Category[]= [
    { id: 1, categoryName: 'İçecek' },
    { id: 2, categoryName: 'Yiyecek' },
    { id: 3, categoryName: 'Teknoloji' },
  ];

  constructor() {}

  ngOnInit(): void {}

}
