import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: 'panorama',
    loadComponent: () => import('../app/views/image-view/image-view.component')
    .then(m => m.ImageViewComponent),
  },
  {
    path: 'spin',
    loadComponent: () => import('../app/views/spin-view/spin-view.component')
    .then(m => m.SpinViewComponent),
  },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
