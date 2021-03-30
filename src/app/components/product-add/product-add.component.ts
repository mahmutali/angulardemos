import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm: FormGroup;
  constructor(private formBuilder: FormBuilder, 
    private productService:ProductService,
    private toastrService:ToastrService) { }

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
      this.productService.add(this.productAddForm.value).subscribe(response=>{
        console.log(response)
        this.toastrService.success("Ürün eklendi","Başarılı")
      })
     
    }
  }

}
