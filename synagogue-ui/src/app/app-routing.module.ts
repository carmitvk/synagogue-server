import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CleanComponent } from './pages/clean/clean.component';
import { HomeComponent } from './pages/home/home.component';
import { ShavuotComponent } from './pages/shavuot/shavuot.component';

const routes: Routes = [
  // { path: '', component: HomeComponent }
  { path: '', component: ShavuotComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
