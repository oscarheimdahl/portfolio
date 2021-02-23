import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallpaper',
  templateUrl: './wallpaper.component.html',
  styleUrls: ['./wallpaper.component.scss'],
})
export class WallpaperComponent implements OnInit {
  show: boolean = false;
  constructor() {
    setTimeout(() => (this.show = true), 200);
  }
  ngOnInit(): void {}
}
