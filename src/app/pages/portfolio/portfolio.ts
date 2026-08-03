import { Component, HostListener, inject, input, signal, viewChild } from '@angular/core';
import { Contact } from '../../components/contact/contact';
import { Research } from '../../components/research/research';
import { Projects } from '../../components/projects/projects';
import { Skills } from '../../components/skills/skills';
import { About } from '../../components/about/about';
import { Home } from '../../components/home/home';
import { Location } from '@angular/common';
import { Navigation } from '../navigation/navigation';
import { StarBackgroundComponent } from '../background/background';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-portfolio',
  imports: [Navigation, Home, About, Skills, Projects, Research, Contact, StarBackgroundComponent, FormsModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {
  protected readonly title = signal('portfolio');
  readonly rotation = signal(0);
  readonly lable = signal('Home');
  readonly activeSectionIndex = signal(0);
  readonly icon = signal('../../../assets/home-button.png')
  // readonly routeDirection = signal<'down' | 'up'>('down');
  // private Location = inject(Location);
  // readonly homeComponent = viewChild(Home);
  // readonly aboutComponent = viewChild(About);
  // readonly skillsComponent = viewChild(Skills);
  // readonly projectsComponent = viewChild(Projects);
  // readonly researchComponent = viewChild(Research);
  // readonly contactComponent = viewChild(Contact);

  sections = [
    { id: 'home',  angle: 0, lable: 'Home', icon: '../../../assets/home-button.png' },
    { id: 'about', angle: 60, lable: 'About', icon: '../../../assets/info.png' },
    { id: 'skills', angle: 120, lable: 'Skills', icon: '../../../assets/personalized.png'  },
    // { id: 'playground', route: '/playground', angle: -46, lable: 'Playground' },
    { id: 'projects', angle: 180, lable: 'Projects', icon: '../../../assets/project.png'  },
    { id: 'research', angle: 240, lable: 'Research', icon: '../../../assets/research_.png'  },
    { id: 'contact', angle: 300, lable: 'Contact', icon: '../../../assets/contact_email.png'  }
  ];

  private setActiveSection(index: number): void {
    const nextIndex = Math.max(0, Math.min(index, this.sections.length - 1));
    if (nextIndex === this.activeSectionIndex()) {
      return;
    }
    this.activeSectionIndex.set(index);
    this.rotation.set(this.sections[index].angle);
    this.lable.set(this.sections[index].lable);
    this.icon.set(this.sections[index].icon);
    // this.Location.replaceState(this.sections[index].route);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const viewportCenter = window.innerHeight / 2;
    let closestSection = this.sections[0];
    let closestDistance = Number.POSITIVE_INFINITY;
    this.sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (!element) {
        return;
      }
      const rect = element.getBoundingClientRect();
      const sectionCenter = rect.top + rect.height / 2;
      const distance = Math.abs(sectionCenter - viewportCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestSection = section;
      }
    });

    this.setActiveSection(this.sections.findIndex(section => section.id === closestSection.id));
  }

  goTo(index: any) {
    this.setActiveSection(index);
    document
      .getElementById(this.sections[index].id)
      ?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
      });
}

  // ngAfterViewInit() {
  //   const path = this.Location.path();
  //   const index = this.sections.findIndex(
  //       s => s.route === path
  //   );
  //   if (index >= 0) {
  //       this.setActiveSection(index);
  //       setTimeout(() => {
  //           document
  //             .getElementById(this.sections[index].id)
  //             ?.scrollIntoView();
  //       });
  //   }
// }

}
