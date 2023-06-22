import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducationComponent } from './education/education.component';
import { EducationListComponent } from './education/education-list/education-list.component';
import { EducationItemComponent } from './education/education-item/education-item.component';

@NgModule({
  declarations: [AppComponent, EducationListComponent, EducationItemComponent, EducationComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
