import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: 'panorama/interior',
    loadComponent: () => import('../app/views/panorama/panorama.component')
    .then(m => m.PanoramaComponent),
  },
  {
    path: 'panorama/pick',
    loadComponent: () => import('../app/views/image-picking/image-picking.component')
    .then(m => m.ImagePickingComponent),
  },
  {
    path: 'panorama/cielo',
    loadComponent: () => import('../app/views/cielo/cielo.component')
    .then(m => m.CieloComponent),
  },
  {
    path: 'panorama/la-favorita',
    loadComponent: () => import('../app/views/la-favorita/la-favorita.component')
    .then(m => m.LaFavoritaComponent),
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
