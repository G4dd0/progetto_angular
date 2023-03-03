import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenrecardComponent } from './components/genrecard/genrecard.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { RegisterformComponent } from './components/registerform/registerform.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'register', component: RegisterformComponent},
  {path: 'genres', component: GenrecardComponent, children: [
    {path: ':name', component: PlaylistComponent}
  ]},
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
