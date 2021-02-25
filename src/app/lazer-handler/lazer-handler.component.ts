import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-lazer-handler',
  templateUrl: './lazer-handler.component.html',
  styleUrls: ['./lazer-handler.component.scss'],
})
export class LazerHandlerComponent {
  lazers = new Array<number>(60);
  showLazers = true;
  pendingShowLazers: any;
  // @ViewChild('handler') handler: ElementRef<HTMLInputElement> | undefined;

  constructor() {}

  @HostListener('window:resize', ['$event'])
  onResize(event: object) {
    this.showLazers = false;
    clearTimeout(this.pendingShowLazers);
    this.pendingShowLazers = setTimeout(() => (this.showLazers = true), 500);
  }
}
