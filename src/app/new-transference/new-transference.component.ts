import { Component } from '@angular/core';

@Component({
  selector: 'app-new-transference',
  templateUrl: './new-transference.component.html',
  styleUrls: ['./new-transference.component.scss'],
})
export class NewTransferenceComponent {
  transfer() {
    console.log('Solicitada nova transferência');
  }
}
