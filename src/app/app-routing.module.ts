import { NgModule } from '@angular/core';
import { UiComponent } from './ui/ui.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'', component: UiComponent},
  {path:'ui', component: UiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
