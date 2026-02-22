import { Component, signal, computed } from '@angular/core';
import { Category, PRODUCTS_DATA } from '../../shared/data/products_data';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../../presentation/shared/product-card/product-card';
import { Title, Meta } from '@angular/platform-browser';
import { OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-products-section',
  imports: [CommonModule, ProductCard],
  templateUrl: './products-section.html',
  styleUrl: './products-section.css',
})
export class ProductsSection implements OnInit {
  private titleService = inject(Title);
  private metaService = inject(Meta);

  categories: any[] = PRODUCTS_DATA.categories;

  activeCategory = signal<Category>(this.categories[0]);
  displayLimit = signal<number>(8); // Initial items to show

  displayedProducts = computed(() => {
    return this.activeCategory().products.slice(0, this.displayLimit());
  });

  hasMoreProducts = computed(() => {
    return this.activeCategory().products.length > this.displayLimit();
  });

  selectCategory(category: Category) {
    this.activeCategory.set(category);
    this.displayLimit.set(8); // Reset pagination on category change
  }

  loadMore() {
    this.displayLimit.update(limit => limit + 8);
  }

  ngOnInit() {
    this.titleService.setTitle('منتجاتنا | دواجن المختار');
    this.metaService.updateTag({ name: 'description', content: 'تصفح جميع منتجات دواجن المختار من دجاج فريش، بانيه، ومجمدات بجودة عالية وأسعار منافسة.' });
  }
}
