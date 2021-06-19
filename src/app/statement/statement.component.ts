import { Component, Input, OnInit } from '@angular/core';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss'],
})
export class StatementComponent implements OnInit {
  transfers: any;

  constructor(private service: TransferService) {}

  ngOnInit(): void {
    this.service.all().subscribe((x) => (this.transfers = x));
  }
}
