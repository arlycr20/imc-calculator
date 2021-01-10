import { NgModule } from '@angular/core';
import { UiComponent } from './ui/ui.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [
  {path:'', component: UiComponent, canActivate: [ AuthGuard ]},
  {path:'ui', component: UiComponent, canActivate: [ AuthGuard ]},
  {path:'login', component: LoginComponent},
  {path:'signin', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
