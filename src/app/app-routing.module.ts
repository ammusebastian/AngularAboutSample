import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { VisionComponent } from './components/vision/vision.component';
import { MyfriendsComponent } from './components/myfriends/myfriends.component';


const routes: Routes = [
  { path:'',component:AboutComponent, pathMatch:'full' },

  { path:'about',component:AboutComponent },
  { path:'contact', component:ContactComponent, children:[
   // { path:'asia',component:AsiaComponent },
   // { path:'europe',component:EuropeComponent },
    //{ path:'arab',component:ArabComponent },
   // { path:'usa',component:USAComponent },
  ] },
  { path:'education',component:EducationComponent},
  { path:'certification',component:CertificationsComponent},
  { path:'hobbies',component:HobbiesComponent },
  { path:'vision',component:VisionComponent },
  { path:'myfriends',component:MyfriendsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
