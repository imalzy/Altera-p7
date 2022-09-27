import { StoreService } from './../store/store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  total: number = 0;

  constructor(public storeService: StoreService) {}

  ngOnInit(): void {
    // this.storeService.getCounter$.subscribe((data) => {
    //   this.total = data;
    //   console.log(data);
    // });
  }
}
