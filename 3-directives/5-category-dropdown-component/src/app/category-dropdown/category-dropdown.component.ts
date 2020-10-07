import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ICategory} from "../../../../../shared/mocks/3-directives/categories";

@Component({
  selector: 'ngx-shop-category-dropdown',
  templateUrl: './category-dropdown.component.html',
})
export class CategoryDropdownComponent {
  @Output()
  public subCategorySelectEvent: EventEmitter<string> = new EventEmitter();

  @Input()
  public categories: ICategory[] = [];

  public currentIndex = null;
  public currentCategory = '';

  public subCategorySelect(subCategoryName: string) {
    this.subCategorySelectEvent.emit(subCategoryName);
  };

  public showSubCategories(index: number) {
    this.currentIndex = index;
  }
}
