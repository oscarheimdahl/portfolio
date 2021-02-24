import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  mobile: boolean = false;
  constructor() {}

  ngOnInit(): void {
    if (window.screen.width < 500) {
      this.mobile = true;
    }
  }
}
