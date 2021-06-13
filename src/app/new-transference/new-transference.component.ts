import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-transference',
  templateUrl: './new-transference.component.html',
  styleUrls: ['./new-transference.component.scss'],
})
export class NewTransferenceComponent {
  @Output() toTransfer = new EventEmitter<any>();

  value!: number;
  destiny!: number;

  transfer() {
    console.log('Solicitada nova transferência');
    const valueIssue = { value: this.value, destiny: this.destiny };
    this.toTransfer.emit(valueIssue);
  }
}
