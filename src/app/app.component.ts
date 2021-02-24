import { Component, HostListener } from '@angular/core';
import { WallpaperComponent } from './wallpaper/wallpaper.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';
  showProfile: string = 'block';
  showProjects: string = 'none';

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    this.showProfile = window.scrollY >= window.innerHeight ? 'none' : 'block';
    this.showProjects = window.scrollY >= window.innerHeight ? 'block' : 'none';
  }
}
