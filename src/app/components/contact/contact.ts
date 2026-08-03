import { Component, signal } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatAnchor, MatButton, MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-contact',
  imports: [MatIcon, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  protected readonly contactDetails = signal([
    {
      name: "Email",
      details: "virajrk6@gmail.com",
      logo: "../../../assets/mail.png",
      link: "mailto:virajrk6@gmail.com"
    },
    {
      name: "Phone",
      details: "+91 73830 65756",
      logo: "../../../assets/contact.png",
      link: "tel:+917383065756"
    },
    {
      name: "Location",
      details: "Gujarat, India",
      logo: "../../../assets/location.png",
      isitemail: true,
      link: "https://maps.app.goo.gl/sTkcbfrbUYt5nZ5TA"
    },
  ])

  protected readonly connectApp = signal([
    {
      name: 'GitHub',
      logo: '../../../assets/GitHub.svg',
      link: 'https://github.com/Virajrk6'
    },
    {
      name: 'LinkedIn',
      logo: '../../../assets/linkedIn.png',
      link: 'https://www.linkedin.com/in/viraj-kalsariya-9730751b9'
    },
    {
      name: 'Google Scholar',
      logo: '../../../assets/Google_Scholar_logo.svg',
      link: 'https://scholar.google.com/citations?user=7LLOGOoAAAAJ&hl=en'
    },
    {
      name: 'ORCID',
      logo: '../../../assets/ORCID_iD.svg',
      link: 'https://orcid.org/0009-0003-5166-0033'
    },
  ])
}
