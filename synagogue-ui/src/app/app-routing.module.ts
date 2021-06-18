import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IzkorViewComponent } from './pages/izkor-view/izkor-view.component';
// import { OpenCloseComponent } from './components/open-close/open-close.component';
// import { CleanComponent } from './pages/clean/clean.component';
// import { ShavuotComponent } from './pages/shavuot/shavuot.component';
import { ViewsManagerComponent } from './pages/views-manager/views-manager.component';

const routes: Routes = [
  // { path: '', component: OpenCloseComponent }
  { path: '', component: ViewsManagerComponent },
  { path: 'izkor', component: IzkorViewComponent }
  // { path: '', component: ShavuotComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
