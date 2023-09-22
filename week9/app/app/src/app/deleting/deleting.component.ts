import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
@Component({
  selector: 'app-deleting',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule, HttpClientModule,],
  templateUrl: './deleting.component.html',
  styleUrls: ['./deleting.component.css']
})
export class DeletingComponent {
  productName: string = '';
  deleteAll: boolean = false;

  constructor(private productService: ProductService) {}


  deleteProduct() {
    if (this.deleteAll) {
      this.productService.removeAllProducts().subscribe(
        () => {
          console.log('Deleted All!');
         
        },
        (error) => {
          console.error('error:', error);
       
        }
      );
    } else {
      this.productService.removeProduct(this.productName).subscribe(
        () => {
          console.log('The item is deleted!');
          
        },
        (error) => {
          console.error('Error:', error);
       
        }
      );
    }
  }

}
