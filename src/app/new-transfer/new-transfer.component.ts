import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {
  @Output() toTransfer = new EventEmitter<any>();

  value!: number;
  destiny!: number;

  transfer() {
    console.log('Solicitada nova transferência');

    const valueIssue = { value: this.value, destiny: this.destiny };
    this.toTransfer.emit(valueIssue);

    this.clearFields();
  }

  clearFields() {
    this.value = 0;
    this.destiny = 0;
  }
}
