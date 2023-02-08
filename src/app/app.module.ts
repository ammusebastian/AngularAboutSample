import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { VisionComponent } from './components/vision/vision.component';
import { MyfriendsComponent } from './components/myfriends/myfriends.component';


@NgModule({
  declarations: [
    AppComponent,
       AboutComponent,
    ContactComponent,
      EducationComponent,
    CertificationsComponent,
    HobbiesComponent,
    VisionComponent,
    MyfriendsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
