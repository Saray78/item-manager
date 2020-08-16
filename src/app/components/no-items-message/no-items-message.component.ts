import { Component } from '@angular/core';
import { NO_ITEMS_MESSAGE } from '../../models/no-items-message/no-items-message.model';

@Component({
  selector: 'app-no-items-message',
  templateUrl: './no-items-message.component.html',
  styleUrls: ['./no-items-message.component.scss']
})
export class NoItemsMessageComponent {
readonly itemsMessage = NO_ITEMS_MESSAGE;
}
