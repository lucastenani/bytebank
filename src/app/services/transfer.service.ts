import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  private transferList: any[];

  constructor() {
    this.transferList = [];
  }

  get transfer() {
    return this.transferList;
  }

  toAdd(transfer: any) {
    this.hydrate(transfer);
    this.transferList.push(transfer);
  }

  hydrate(transfer: any) {
    transfer.date = new Date();
  }
}
