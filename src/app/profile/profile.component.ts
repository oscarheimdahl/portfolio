import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  title = '';
  cursor = '|';
  showName: boolean = false;
  showTitle: boolean = false;

  constructor() {
    setTimeout(() => (this.showTitle = true), 1200);
    setInterval(() => (this.cursor = this.cursor === '|' ? '' : '|'), 1000);
  }

  buildTitle(i: number) {
    const fullTitle = 'Civilingenjör i Interaktion och Design';
    this.title += fullTitle.charAt(i);
    if (i < fullTitle.length - 1) setTimeout(() => this.buildTitle(i + 1), 50);
  }

  ngOnInit(): void {}
}
