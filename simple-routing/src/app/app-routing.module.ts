import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './view/home/home.component';
import {DetailComponent} from './view/detail/detail.component';

const routes: Routes = [
  {path: 'detail', component: DetailComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
