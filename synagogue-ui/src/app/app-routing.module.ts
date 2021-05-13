import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DateCmpComponent } from './cmps/date-cmp/date-cmp.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
  // { path: '', component: DateCmpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
