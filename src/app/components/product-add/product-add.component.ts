import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from "@angular/forms"

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      categoryId: ["", [Validators.required]],
      unitPrice: [0, [Validators.required, Validators.min(0)]],
      unitsInStock: [0, [Validators.required, Validators.min(0)]]   
    })
  }

  add(){
    if(this.productAddForm.valid){
      console.log(this.productAddForm.value)
    }
  }

}
