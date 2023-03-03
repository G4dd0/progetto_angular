import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private sharedService:SharedService){};
  showFiller = false;
  rippleradius = 15;

  clickMe(){
    this.sharedService.sendClickEvent();
  }
}
