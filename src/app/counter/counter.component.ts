import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset, setCounterValue } from '../state/counter.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  setCounterVal = 0;

  constructor(private store : Store <{counter: number}>) {

  }

  

  counterVariable: Observable <number> = this.store.select('counter');
  
  increment(){
    this.store.dispatch(increment());
  }
  decrement(){
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }
  setCounterValue(num : string) {
    this.store.dispatch(setCounterValue({num: Number(num)}))
    console.log(num);
  }
}
