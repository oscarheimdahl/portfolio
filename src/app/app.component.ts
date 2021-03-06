import { Component, HostListener } from '@angular/core';
import { WallpaperComponent } from './wallpaper/wallpaper.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Oscar Heimdahl';
  showProfile: string = 'visible';
  showContact: string = 'hidden';
  scrollIndicator: string = '1';

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    this.scrollIndicator = '0';
    const showProjects = window.scrollY >= window.innerHeight * 1.1;
    this.showProfile = showProjects ? 'hidden' : 'visible';
    this.showContact = showProjects ? 'visible' : 'hidden';
  }
}
