import { Component, signal } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar'

interface skills {
  title: string;
  src: string;
  isToolLogoAvailable: boolean;
  isToolRatingAvailable: boolean
  tools: tools[];
}
interface tools{
  name: string;
  logo?: string;
  rating?: number;
}
interface strength{
  title: string;
  discription: string;
  logo: string;
  softSkills: softSkills[]
}
interface softSkills {
  skillLogo: string;
  skillTitle: string;
  skillDiscription: string
}

@Component({
  selector: 'app-skills',
  imports: [ MatProgressBarModule ],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {

protected readonly  Skills = signal<skills[]>([
    {
      title: "Frontend Development",
      src: "../../../assets/frontend.png",
      isToolLogoAvailable: true,
      isToolRatingAvailable: true,
      tools: [
        {
          name: "HTML5",
          logo: "../../../assets/HTML5.svg",
          rating: 75,
        },
        {
          name: "CSS3",
          logo: "../../../assets/CSS3.svg",
          rating: 75,
        },
        {
          name: "JavaScript",
          logo: "../../../assets/JavaScript.svg",
          rating: 75,
        },
        {
          name: "TypeScript",
          logo: "../../../assets/TypeScript.svg",
          rating: 75,
        },
        {
          name: "Bootstrap",
          logo: "../../../assets/Bootstrap.svg",
          rating: 75,
        },
        {
          name: "Angular Material",
          logo: "../../../assets/angular-material.png",
          rating: 75,
        }
      ]
    },
    {
      title: "Angular Ecosystem",
      src: "../../../assets/icon_angular_gradient_alt03.png",
      isToolLogoAvailable: false,
      isToolRatingAvailable: true,
      tools: [
        {
          name: "Angular (v21+)",
          // logo: "",
          rating: 75,
        },
        {
          name: "Signals",
          // logo: "",
          rating: 75,
        },
        {
          name: "RxJs",
          // logo: "",
          rating: 75,
        },
        {
          name: "Standalong APIs",
          // logo: "",
          rating: 75,
        },
        {
          name: "Routing",
          // logo: "",
          rating: 75,
        },
        {
          name: "Reactive Forms",
          // logo: "",
          rating: 75,
        },
        {
          name: "HTTP Client",
          // logo: "",
          rating: 75,
        }
      ]
    },
    {
      title: "Tools & Technology",
      src: "../../../assets/tools.png",
      isToolLogoAvailable: true,
      isToolRatingAvailable: false,
      tools: [
        {
          name: "Git & GitHub",
          logo: "../../../assets/GitHub.svg",

        },
        {
          name: "VS Code",
          logo: "../../../assets/VS Code.svg",
        },
        {
          name: "Postman",
          logo: "../../../assets/Postman.svg",
        },
        {
          name: "npm",
          logo: "../../../assets/NPM.svg",
        },
        {
          name: "Chrome DevTools",
          logo: "../../../assets/Chrome.svg",
        },
        {
          name: "Linux / Ubuntu",
          logo: "../../../assets/Ubuntu.svg",
        }
      ]
    },
    {
      title: "Scientific Computing",
      src: "../../assets/research.png",
      isToolLogoAvailable: true,
      isToolRatingAvailable: false,
      tools: [
        {
          name: "Python",
          logo: "../../../assets/Python.svg",
        },
        {
          name: "Mathematica",
          logo: "../../../assets/Mathematica_Logo.svg",
        },
        {
          name: "C/C++",
          logo: "../../../assets/C++.svg",
        },
        {
          name: "LaTex (Overleaf)",
          logo: "../../../assets/overleaf.svg",
        },
        // {
        //   name: "Numerical Analysis",
        //   logo: "../../../assets/financial-record.png",
        // },
        {
          name: "Data Visualization",
          logo: "../../../assets/exploratory-analysis.png",
        },
        {
          name: "Scientific Programing",
          logo: "../../../assets/software.png",
        }
      ]
    },
  ])

  protected readonly strength = signal<strength>({
    title: "Core Strength",
    discription: "More than technical skills, this is how I approach every challenge.",
    logo: "../../../assets/rocket.png",
    softSkills: [
      {
        skillTitle: "Problem Solving",
        skillDiscription: "Breaking complex problems into simple, logical steps.",
        skillLogo: "../../../assets/brain.png"
      },
      {
        skillTitle: "Analytical Thinking",
        skillDiscription: "Strong foundation in mathematics and logical reasoning.",
        skillLogo: "../../../assets/loupe.png"
      },
      {
        skillTitle: "Research Mindset",
        skillDiscription: "Curious, detail-oriented and driven by deep understanding.",
        skillLogo: "../../../assets/book.png"
      },
      {
        skillTitle: "Continuous Learning",
        skillDiscription: "Always learning new technologies and improving.",
        skillLogo: "../../../assets/Analytics.png"
      },
      {
        skillTitle: "Collaboration",
        skillDiscription: "Working effectively with teams and communicating complex ideas.",
        skillLogo: "../../../assets/team.png"
      },
    ]
  }
  )
}
