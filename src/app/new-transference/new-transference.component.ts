import { Component } from '@angular/core';

@Component({
  selector: 'app-new-transference',
  templateUrl: './new-transference.component.html',
  styleUrls: ['./new-transference.component.scss'],
})
export class NewTransferenceComponent {
  value!: number;
  destiny!: number;

  transfer() {
    console.log('Solicitada nova transferência');
    console.log('Valor: ', this.value);
    console.log('Destino: ', this.destiny);
  }
}
