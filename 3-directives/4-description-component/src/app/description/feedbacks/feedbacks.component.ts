import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IFeedback} from "../../../../../../shared/mocks/3-directives/product-information";

@Component({
  selector: 'ngx-shop-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.sass'],
})
export class FeedbacksComponent {

  @Output()
  public addFeedbackEvent: EventEmitter<string> = new EventEmitter();

  @Input()
  public feedbacks: IFeedback[] = [];

  public addNewFeedback() {
    this.addFeedbackEvent.emit('Some Feedback');
  }
}
