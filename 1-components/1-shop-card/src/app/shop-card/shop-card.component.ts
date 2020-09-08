import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICartProduct } from '../../../../../shared/mocks/1-components/cart-product';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
})

export class ShopCardComponent {
  @Input()
  public product: Partial<ICartProduct> = {};

  @Output()
  public increment: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public decrement: EventEmitter<void> = new EventEmitter<void>();

  public incrementProductInCart(): void {
    this.increment.emit();
  }

  public decrementProductInCart(): void {
    this.decrement.emit();
  }
}
