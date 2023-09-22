import { Routes } from '@angular/router';


export const routes: Routes = [
    {path: '', loadComponent: () => import('./add-product/add-product.component').then(mod => mod.AddProductComponent)},
    
];