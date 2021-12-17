import { Component, OnInit, VERSION } from '@angular/core';
import { interval, take, Observable, fromEvent, from, of } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  constructor() {
    // const data$ = from([1, 2, 3, 4, 5]);
    const data$ = of(1, 2, 3, 4, 5);
    // const data$ = interval(100).pipe(take(4));

    data$.subscribe({
      next(response) {
        console.log(response);
      },
      error(err) {
        console.log('error', err);
      },
      complete() {
        console.log('completed');
      },
    });
  }

  ngOnInit() {
    const event$ = fromEvent(document.getElementById('test'), 'click').pipe(
      take(3)
    );

    event$.subscribe({
      next(response) {
        console.log('response clicked', response);
      },
      error(err) {
        console.log('error', err);
      },
      complete() {
        console.log('completed');
      },
    });
  }
}
