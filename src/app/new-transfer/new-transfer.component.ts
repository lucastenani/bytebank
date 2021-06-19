import { Component, EventEmitter, Output } from '@angular/core';
import { Transfer } from '../models/transfers.model';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {
  @Output() toTransfer = new EventEmitter<any>();

  value!: number;
  destiny!: number;

  constructor(private service: TransferService) {}

  transfer() {
    console.log('Solicitada nova transferência');

    const valueIssue: Transfer = { value: this.value, destiny: this.destiny };
    this.service.toAdd(valueIssue).subscribe(
      (result) => {
        console.log(result);
        this.clearFields();
      },
      (error) => console.error(error)
    );
  }

  clearFields() {
    this.value = 0;
    this.destiny = 0;
  }
}
