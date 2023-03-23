import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [];

  constructor(private productService: ProductsService) {}
  displayedColumns: string[] = ['id', 'name', 'description', 'amount', 'currency', 'quantity'];

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => this.products = data)
  }

}
