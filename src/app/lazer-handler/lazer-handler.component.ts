import { Component } from '@angular/core';

@Component({
  selector: 'app-lazer-handler',
  templateUrl: './lazer-handler.component.html',
  styleUrls: ['./lazer-handler.component.scss'],
})
export class LazerHandlerComponent {
  lazers = new Array<number>(60);
  // @ViewChild('handler') handler: ElementRef<HTMLInputElement> | undefined;

  constructor() {}
}
