import { Component, OnInit } from '@angular/core';
const colors = ['#03256C', '#2541B2', '#1768AC', '#06BEE1', '#821080'];
@Component({
  selector: 'app-lazer',
  templateUrl: './lazer.component.html',
  styleUrls: ['./lazer.component.scss'],
})
export class LazerComponent implements OnInit {
  x: number;
  y: number = 0;
  color: string = colors[Math.floor(Math.random() * colors.length)];
  transition: string = 'top 2s';

  constructor() {
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    setTimeout(
      () =>
        setInterval(() => {
          if (this.y > window.innerHeight) {
            this.y = window.innerHeight * -0.5;
            // this.transition = 'top 0s';
          } else if (this.y < 0) {
            this.y = window.innerHeight * 1.5;
            // this.transition = 'top 2s';
          }
        }, Math.random() * 4000 + 2000),
      2000
    );
    this.y =
      Math.random() > 0.5
        ? window.innerHeight * 1.5
        : window.innerHeight * -0.5;
  }

  ngOnInit(): void {}
}
