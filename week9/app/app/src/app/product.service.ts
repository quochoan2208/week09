import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) {}

  addProduct(productData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, productData);
  }
  searchProductsByName(name: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/search?name=${name}`);
  }
  updateProduct(currentName: string, newName: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update`, { currentName, newName });
  }
  removeProduct(name: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/remove?name=${name}`);
  }

  removeAllProducts(): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/removeAll`);
  }


}
