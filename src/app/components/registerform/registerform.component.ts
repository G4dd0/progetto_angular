import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit{

  homeform: FormGroup;

  constructor(private firebase: FirebaseService){};

  ngOnInit(): void {
    this.homeform = new FormGroup({
      nome: new FormControl(null, Validators.required),
      cognome: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email])
    })
  };

  onSubmit(){
    this.firebase.insertUser(
      'https://fake-spotify-7d372-default-rtdb.firebaseio.com/users.json',
      {nome: this.homeform.value.nome, cognome: this.homeform.value.cognome, email: this.homeform.value.email}
    ).subscribe(data => {
      console.log(data);
    })
  }
}
