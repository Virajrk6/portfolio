import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Research } from './components/research/research';
import { Contact } from './components/contact/contact';
import { Portfolio } from './pages/portfolio/portfolio';

export const routes: Routes = [
    {path:'', component:Portfolio}, 
    {
    path: '**',
    redirectTo: ''
  }
    // {path:'home', component:Home},
    // {path:'about', component:About},
    // {path:'skills', component:Skills},
    // {path:'projects', component:Projects},
    // {path:'research', component:Research},
    // {path:'contact', component:Contact}
];
