import { Component, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgClass } from '@angular/common';



@Component({
  selector: 'app-about',
  imports: [MatIcon, MatTooltipModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})

export class About {

  protected isToggleClicked = signal(false);
  protected clickedButton = signal('');
  protected extraInfo = signal('');
  protected panelState = signal<'idle' | 'open' | 'closed'>('idle')

  protected openBox(title: string) {
    if (this.clickedButton() == title) {
      this.isToggleClicked.set(false)
      this.panelState.set('closed')
      this.clickedButton.set('')
    }
    else {
      this.isToggleClicked.set(true)
      this.panelState.set('open')
      this.clickedButton.set(title)
    }
  }

  protected timelineItems = signal([
    {
      title: 'Physics Student',
      description: 'Passion for the universe and how it works.',
      icon: 'person',
    },
    {
      title: 'Astrophysics Research',
      description: 'Explored gravitational physics, pulsars and compact objects.',
      // icon: 'explore',
      isAngularLogo: true,
      src: '../../../assets/universe (1).png'

    },
    {
      title: 'Published Research',
      description: 'Contributed to research in relativistic astrophysics.',
      icon: 'description'
    },
    {
      title: 'Frontend Development',
      description: 'Discovered the joy of building products for real people.',
      icon: 'code'
    },
    {
      title: 'Angular Developer',
      description: 'Building modern web apps with performance and user experience in mind.',
      isAngularLogo: true,
      src: '../../../assets/angular_gradient.png'
    }
  ]);
}
