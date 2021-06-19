import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transfer } from '../models/transfers.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  private transferList: any[];
  private url = 'http://localhost:3000/transfers/';

  constructor(private httpClient: HttpClient) {
    this.transferList = [];
  }

  get transfer() {
    return this.transferList;
  }

  all(): Observable<Transfer[]> {
    return this.httpClient.get<Transfer[]>(this.url);
  }

  toAdd(transfer: Transfer): Observable<Transfer> {
    this.hydrate(transfer);
    return this.httpClient.post<Transfer>(this.url, transfer);
  }

  hydrate(transfer: any) {
    transfer.date = new Date();
  }
}
