import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about/about.component';
import { StudyComponent } from './home/study/study.component';
import { TestComponent } from './home/test/test.component';
import { VerbsComponent } from './home/verbs/verbs.component';
import { VerbsDetailsComponent } from './home/verbs/verbs-details/verbs-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'study', component: StudyComponent },
  { path: 'test', component: TestComponent },
  { path: 'verbs', component: VerbsComponent },
  { path: 'verbs/:verbsId', component: VerbsDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
