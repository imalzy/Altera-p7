import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private count$ = new BehaviorSubject<number>(0);
  public getCounter$ = this.count$.asObservable();

  constructor() {}

  setCounter(count: number) {
    this.count$.next(count);
  }
}
