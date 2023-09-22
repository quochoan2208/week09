import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-updating',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule, HttpClientModule,],
  templateUrl: './updating.component.html',
  styleUrls: ['./updating.component.css']
})
export class UpdatingComponent {
  updateForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.updateForm = this.fb.group({
      currentName: ['', Validators.required],
      newName: ['', Validators.required]
    });
  }

  onSubmit() {
    const currentName = this.updateForm.value.currentName;
    const newName = this.updateForm.value.newName;
    this.productService.updateProduct(currentName, newName).subscribe(
      (response) => {
        if (response.message === 'Successfully updated') {
          console.log('Successfully updated!');
        } else {
          console.error('Product not found');
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

}
