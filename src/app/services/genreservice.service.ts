import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenreserviceService {

  constructor() { }
  genres = [
    {id: 1, name: "rock", cover: "https://i.scdn.co/image/ab67706f0000000278b4745cb9ce8ffe32daaf7e"},
    {id: 2, name: "pop", cover: "https://i.scdn.co/image/ab67616d00001e0208f3e7a08eb03064e6eb0af7"},
    {id: 3, name: "trap", cover: "https://i.scdn.co/image/ab67706c0000da84ed6706343b03d8c6c29fa0ff"},
    {id: 4, name: "metal", cover: "https://i.scdn.co/image/ab67616d00001e020ca0731c2443f409c6ba688b"}
  ];

  getGenres(){
    return this.genres;
  }

  getGenre(index: number){
    return this.genres[index];
  }
}
