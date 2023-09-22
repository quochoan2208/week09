import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-searching',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule, HttpClientModule,],
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.css']
})
export class SearchingComponent {
  searchForm: FormGroup;
  searchResults: any[] = [];

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.searchForm = this.fb.group({
      name: ['']
    });
  }

  onSubmit() {
    const name = this.searchForm.value.name;
    this.productService.searchProductsByName(name).subscribe(
      (results) => {
        this.searchResults = results;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

}
