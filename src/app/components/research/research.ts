import { Component, signal } from '@angular/core';
import { MatButton, MatButtonModule, MatMiniFabAnchor, MatMiniFabButton } from '@angular/material/button';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-research',
  imports: [MatButtonModule, MatIcon],
  templateUrl: './research.html',
  styleUrl: './research.css',
})
export class Research {

  protected readonly overView = signal([
    {
      title: "Publications",
      subtitle: "Peer-reviewed",
      number: 3,
      logo: "../../../assets/newspaper.png"
    },
    {
      title: "First-author",
      subtitle: "Paper",
      number: 2,
      logo: "../../../assets/user.png"
    },
    {
      title: "Years of experience",
      // subtitle: "Paper",
      number: "4+",
      logo: "../../../assets/telescope.png"
    },
    {
      title: "Inernational collaborations",
      subtitle: "Multiple institutes",
      logo: "../../../assets/outsourcing.png"
    }
  ])

  protected readonly researchDetails = signal([
    {
      title: "Time delay of pulsar signals in astrophysical black hole spacetimes",
      journal: "Physics of the Dark Universe",
      journalLink: "https://www.sciencedirect.com/journal/physics-of-the-dark-universe",
      authors: "Parth Bambhaniya, Viraj Kalsariya, Saurabh , Elisabete M. de Gouveia Dal Pino, Ivan De Martino, Riccardo Della Monica, Mariafelicia De Laurentis",
      year: "June 2025",
      doi: "https://doi.org/10.1016/j.dark.2025.102036",
      pdf: "https://arxiv.org/pdf/2506.06583",
      img: "../../../assets/1.png"
    },
    {
      title: "Relativistic time delay analysis of pulsar signals near ultracompact objects",
      journal: "Physical Review D",
      journalLink: "https://journals.aps.org/prd/",
      authors: "Viraj Kalsariya, Parth Bambhaniya, Pankaj S. Joshi",
      year: "May 2024",
      doi: "https://doi.org/10.1103/PhysRevD.110.104026",
      pdf: "https://arxiv.org/pdf/2405.01835",
      img: "../../../assets/2.png",

    },
    {
      title: "Cosmo-dynamics of dark energy models resulting from a parametrization of H in f(Q, T) gravity",
      journal: "European Physical Journal Plus",
      journalLink: "https://link.springer.com/journal/13360",
      authors: "Viraj Kalsariya, Shibesh Kumar Jas Pacif",
      year: "April 2023",
      doi: "https://doi.org/10.1140/epjp/s13360-023-04177-w",
      pdf: "https://arxiv.org/pdf/2304.09163",
      img: "../../../assets/3.png",
    }
  ])

  protected readonly researchAreas = signal([
    'Pulsar Timing', 
    'Gravitational Wave Physics',
    'Numerical Relativity', 
    'Extreme Gravity Regions', 
    'Accretion and Jet Formation',
    'High-energy Astrophysics', 
    'Fast Radio Bursts', 
    'Compact Binaries'
  ])

  protected readonly tools =signal([
    {
      logo:'../../../assets/Mathematica_Logo.svg',
      name:'Mathematica'
    },
    {
      logo:'../../../assets/Python.svg',
      name:'Python'
    },
    {
      logo:'../../../assets/C++.svg',
      name:'C/C++'
    },
    {
      logo:'../../../assets/Ubuntu.svg',
      name:'Linux'
    }
  ])
}
