import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { ContentComponent } from './pages/content/content.component';

const routes: Routes = [
  {
    path:'',
    component:PagesComponent
  },
  {
    path:'content',
    component:ContentComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
