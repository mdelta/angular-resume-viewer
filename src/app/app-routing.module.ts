import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ImpressumComponent } from './home/impressum/impressum.component';

const routes: Routes = [
  { path: '', redirectTo: '/cv', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cv', component: ResumeComponent },
  { path: 'dsgvo', component: HomeComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: '**', component: ResumeComponent },
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload',
  // ...any other options you'd like to use
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
