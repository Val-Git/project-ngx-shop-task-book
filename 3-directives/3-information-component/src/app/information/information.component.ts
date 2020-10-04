import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IProduct} from "../../../../../shared/mocks/3-directives/product-information";

@Component({
  selector: 'ngx-shop-information',
  templateUrl: './information.component.html',
})
export class InformationComponent {
  @Input()
  public product: IProduct = null;

  @Output()
  public addToCart = new EventEmitter();

  public isShow = false;

  public addToBasket() {
    this.addToCart.emit();
  }

  public show(isShow: boolean) {
    this.isShow = isShow;
  }
}
