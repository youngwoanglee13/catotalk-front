import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './signup/signup.component';
import { SignInComponent } from './signin/signin.component';
import { NewPostComponent } from './newpost/newpost.component';
import { VistapostComponent } from './vistapost/vistapost.component';
import { ReviewComponent } from './review/review.component';
import { Guard } from './services/guard';


const routes: Routes = [
  { path : '', redirectTo: 'inicio', pathMatch: 'full' },
  { path : 'signup', component: SignUpComponent },
  { path : 'signin', component: SignInComponent },
  { path : 'inicio', component: VistapostComponent}, 
  { path : 'inicio/:id', component: ReviewComponent,canActivate: [Guard]},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
