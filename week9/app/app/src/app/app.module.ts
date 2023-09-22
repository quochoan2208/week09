import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SearchingComponent } from './searching/searching.component';
import { UpdatingComponent } from './updating/updating.component';
import { DeletingComponent } from './deleting/deleting.component';
const routes: Routes = [{path: '',component: AddProductComponent},{path: 'search',component: SearchingComponent},{path: 'update',component: UpdatingComponent},{path: 'delete',component: DeletingComponent}]

@NgModule({
  declarations: [
    AppComponent,
    
    // UpdatingComponent,
    
    
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,
    RouterModule.forRoot(routes),CommonModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
