import { Component, input, output, signal } from '@angular/core';
import { MatAnchor, MatButton, MatIconButton, MatFabButton } from "@angular/material/button";
import { MatTooltip } from '@angular/material/tooltip';
import { MatIcon } from "@angular/material/icon";
import { CdkDrag } from '@angular/cdk/drag-drop';
import { CdkOverlayOrigin } from "@angular/cdk/overlay";

@Component({
  selector: 'app-navigation',
  imports: [MatTooltip, MatIconButton, MatFabButton, MatIcon, CdkDrag],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation {
  readonly lable = input();
  readonly rotation = input();
  readonly icon = input();
  readonly goTobutton = output();
  isMenuOpen = signal(true);
  getMenuIcon = signal<'menu' | 'close'>("close")

  protected isActive(place: string): boolean {
    return String(this.lable() ?? '') === place;
  }
  protected toggle() {
    this.isMenuOpen.set(!this.isMenuOpen());
    this.getMenuIcon() === 'menu' ? this.getMenuIcon.set('close') : this.getMenuIcon.set('menu')
  }


  protected readonly logos = signal([
    {
      src: '../../../assets/home-button.png',
      place: 'Home',
      index: 0
    },
    {
      src: '../../../assets/info.png',
      place: 'About',
      index: 1
    },
    {
      src: '../../../assets/personalized.png',
      place: 'Skills',
      index: 2
    },
    {
      src: '../../../assets/project.png',
      place: 'Projects',
      index: 3
    },
    {
      src: '../../../assets/research_.png',
      place: 'Research',
      index: 4
    },
    {
      src: '../../../assets/contact_email.png',
      place: 'Contact',
      index: 5
    }
  ])
  goTo(index: any): void {
    this.goTobutton.emit(index);
    // console.log(index)
  }

}

