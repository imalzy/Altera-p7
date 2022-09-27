import { StoreService } from './store/store.service';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pertemuan7';
  description = 'detail';
  resultOutput!: string;
  count: number = 0;

  @ViewChild('email') email:any;
  @ViewChild('password') password:any;

  data:any;
  constructor(private storeService:StoreService){}

  onTrigger(e: string): void {
    this.resultOutput = e;
  }

  onCounter(): void {
    this.count++;
    this.storeService.setCounter(this.count);
  }

  onSubmit(e:any):void{
    e.preventDefault();
    const email = this.email?.nativeElement?.value;
    const password = this.password?.nativeElement?.value;
    this.data = {
      email: email,
      pass: password
    }
  }
}
