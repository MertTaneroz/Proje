import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MyworkComponent } from './pages/mywork/mywork.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'mywork', component:MyworkComponent},
  {path:'contact',component:ContactComponent},
  {path:'comments',component:CommentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
