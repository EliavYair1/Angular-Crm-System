import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  transition,
  style,
  trigger,
} from '@angular/animations';
@Component({
  selector: 'app-open-close',
  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'yellow',
        })
      ),
      state(
        'closed',
        style({
          height: '100px',
          opacity: 0.8,
          backgroundColor: '#c6ecff',
        })
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.scss'],
})
export class OpenCloseComponent implements OnInit {
  isOpen = true;
  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor() {}

  ngOnInit(): void {}
}
