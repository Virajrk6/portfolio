import { Component, output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIcon} from "@angular/material/icon";
import { MatButton, MatFabButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-home',
  imports: [MatIcon, MatFabButton, MatTooltip],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly goToPage = output();
  
  goTo(index:any){
    this.goToPage.emit(index)
  }
}
