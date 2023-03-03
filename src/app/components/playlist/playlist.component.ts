import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit{

  constructor(private firebase: FirebaseService, private route: ActivatedRoute){};
  songs: any;
  currentgenre: any;

  ngOnInit(): void {
    this.currentgenre = this.route.snapshot.paramMap.get('name');
    console.log(this.currentgenre);

    this.firebase.getSongs('https://fake-spotify-7d372-default-rtdb.firebaseio.com/songs.json')
      .subscribe((data: any) => {
        const filteredSongs = Object.values(data).filter((song: any) => song.genre === this.currentgenre);
        this.songs = filteredSongs;
        console.log(this.songs);
        return this.songs;
      });
  }

}
