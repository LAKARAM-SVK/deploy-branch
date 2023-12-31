import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsViewComponent } from './details-view/details-view.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent, 
    children: [
  {
    path : 'details-view',
    component : DetailsViewComponent, 
  }
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
