import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 


@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule, HttpClientModule,],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      price: ['', Validators.required],
      unit: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const formData = this.productForm.value;
      this.productService.addProduct(formData).subscribe(
        () => {
          console.log('Successfully Added');
          
        },
        (error) => {
          console.error('Error', error);
          
        }
      );
    }
  }

}
