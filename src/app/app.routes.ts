import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then(m => m.Home),
  },
  {
    path: 'products',
    loadComponent: () => import('./features/products-section/products-section').then(m => m.ProductsSection),
  },
  {
    path: 'product/:id',
    loadComponent: () => import('./features/product-details/product-details').then(m => m.ProductDetails)
  },
  {
    path: '**',
    redirectTo: '',
  }
];
