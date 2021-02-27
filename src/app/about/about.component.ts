import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
    @Input() scrollIndicator: string |undefined;
  mobile: boolean = false;
  shadow: string = 'box-shadow: rgba(49, 20, 209, 0.356) 0px 48px 100px 0px;';

  ngOnInit(): void {
    if (window.screen.width < 500) {
      this.mobile = true;
    }
  }
}
