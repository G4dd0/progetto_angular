import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http: HttpClient) { }

  insertUser(url: string, body: {}){
    return this.http.post(url, body);
  }

  getSongs(url: string){
    return this.http.get(url);
  }

  getSongsGenre(url: string, genre: string){
    return this.http.get(`${url}?orderBy="genre"&equalTo="${genre}"`);
  }

}
