import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [RouterModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() price: string = '';
  @Input() imageUrl: string = '';
  @Input() id: string = '';
  @Input() badgeText?: string;
  @Input() badgeType?: 'sale' | 'new' | 'fresh';
}
