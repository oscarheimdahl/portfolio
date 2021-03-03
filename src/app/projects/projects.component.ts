import { Component, OnInit } from '@angular/core';

interface project {
  title: string;
  image: string;
  text: string;
  link?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: project[] = projects;
  constructor() {}

  ngOnInit(): void {}
}

const projects: project[] = [
  {
    title: 'Typer',
    link: 'https://typer-14eb6.firebaseapp.com/',
    image: 'assets/images/projects/typer.png',
    text:
      'Tävla mot andra i att skriva snabbt! Sidan är skapad i React och använder Firebase som backend för att koppla ihop spelare och lagra texter.',
  },
  {
    title: '25 Minutes',
    link: 'https://github.com/oscarheimdahl/break-timer-2/releases/tag/v2.1',
    image: 'assets/images/projects/25.png',
    text:
      'Ett native program till windows och mac. Påminner en att ofta ta pauser. Byggt i electron.',
  },
  {
    title: 'Gradient Picker',
    link: 'https://oscarheimdahl.github.io/gradient-picker/',
    image: 'assets/images/projects/gradient.png',
    text:
      'Ett smidigt verktyg som gör det enkelt att skapa fina gradienter, som sedan kan exporteras till css eller som bild.',
  },
  {
    title: 'Arboreal',
    image: 'assets/images/projects/arboreal.png',
    text:
      'I ett skolprojekt kom vi fram med ett designförslag till startup:en Arboreal. Projektet innebar utformning och testning av prototyper och resulterade i ett designförslag till Arboreals app.',
  },
  {
    title: 'Alvira',
    image: 'assets/images/projects/alvira.png',
    text:
      'Som intern på Alvira fick jag jobba med att implementera ett redan designat gränssnitt. Arbetet genomfördes i Flutter och jag fick pröva på att arbeta tätt med andra utvecklare i ett litet team.',
  },
  {
    title: 'Tetris',
    link: 'https://oscarheimdahl.github.io/tetris/',
    image: 'assets/images/projects/tetris.png',
    text: 'Tetris :)',
  },
];
