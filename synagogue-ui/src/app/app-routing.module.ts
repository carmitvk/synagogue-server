import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IzkorViewComponent } from './pages/izkor-view/izkor-view.component';
// import { OpenCloseComponent } from './components/open-close/open-close.component';
// import { CleanComponent } from './pages/clean/clean.component';
import { ViewsManagerComponent } from './pages/views-manager/views-manager.component';
import { JsonViewerComponent } from './components/views/json-viewer/json-viewer.component';

const routes: Routes = [
  // { path: '', component: OpenCloseComponent }
  { path: '', component: ViewsManagerComponent },
  { path: 'izkor', component: IzkorViewComponent },
  { path: 'editor', component: JsonViewerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
