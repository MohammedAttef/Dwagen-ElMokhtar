import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { Product, PRODUCTS_DATA } from '../../shared/data/products_data';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  private route = inject(ActivatedRoute);
  private titleService = inject(Title);
  private metaService = inject(Meta);

  product = signal<Product | undefined>(undefined);
  selectedWeight = signal<number>(1);
  quantity = signal<number>(1);
  categoryName = signal<string>('فريش');

  totalPrice = computed(() => {
    const p = this.product();
    if (!p) return 0;
    return p.price_per_kg * this.selectedWeight() * this.quantity();
  });

  constructor() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        // Find product in PRODUCTS_DATA
        for (const category of PRODUCTS_DATA.categories) {
          const found = category.products.find(p => p.id === id);
          if (found) {
            this.product.set(found);
            this.categoryName.set(category.id === 'fresh' ? 'فريش' : 'مجمد');
            
            // Dynamic SEO Updates
            this.titleService.setTitle(`${found.name} | دواجن المختار`);
            this.metaService.updateTag({ name: 'description', content: found.description });
            this.metaService.updateTag({ property: 'og:title', content: `${found.name} | دواجن المختار` });
            this.metaService.updateTag({ property: 'og:description', content: found.description });
            this.metaService.updateTag({ property: 'og:image', content: found.photo });
            
            break;
          }
        }
      }
    });
  }

  setWeight(weight: number) {
    this.selectedWeight.set(weight);
  }

  incrementQuantity() {
    this.quantity.update(q => q + 1);
  }

  decrementQuantity() {
    if (this.quantity() > 1) {
      this.quantity.update(q => q - 1);
    }
  }
}
