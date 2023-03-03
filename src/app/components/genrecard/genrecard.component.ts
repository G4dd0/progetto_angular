import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenreserviceService } from 'src/app/services/genreservice.service';
import { SharedService } from 'src/app/services/shared.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-genrecard',
  templateUrl: './genrecard.component.html',
  styleUrls: ['./genrecard.component.css']
})
export class GenrecardComponent implements OnInit{

  clickEventsubscription:Subscription;
  genres: any;
  showMainContent = true;
  constructor(private genreService: GenreserviceService, private sidebar: SidebarComponent, private sharedService: SharedService){
    this.clickEventsubscription = this.sharedService.getClickEvent().subscribe(()=>{this.onClickSidebar()});
  };

  ngOnInit(): void {
    this.genres = this.genreService.getGenres();
    console.log(this.genres);
    this.showMainContent = true;
  }

  onNavigate() {
    this.showMainContent = false;
  }

  onClickSidebar(){
    this.showMainContent = true;
  }
}
