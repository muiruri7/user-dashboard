import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counterSubject = new BehaviorSubject<number>(0);
  counter$ = this.counterSubject.asObservable();

  increment(): void {
    this.counterSubject.next(this.counterSubject.value + 1);
  }

  decrement(): void {
    this.counterSubject.next(this.counterSubject.value - 1);
  }

  reset(): void {
    this.counterSubject.next(0);
  }
}