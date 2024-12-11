import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgrammesComponent } from './programmes/programmes.component'; // Adjust the path as necessary
import { AlumniComponent } from './alumni/alumni.component';
import { StudentsComponent } from './students/students.component';
import { ExamnoticeComponent } from './examnotice/examnotice.component';
import { PlacementsComponent } from './placements/placements.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CommerceComponent } from './programmes/commerce/commerce.component';
import { ComputerItComponent } from './programmes/computer-it/computer-it.component';
import { PostgraduateComponent } from './programmes/postgraduate/postgraduate.component';
import { ActivitiesComponent } from './students/activities/activities.component';
import { SportsComponent } from './students/sports/sports.component';
import { MenuBodyComponent } from './menu-body/menu-body.component';
import { IndiragroupComponent } from './aboutus/indiragroup/indiragroup.component';
import { IccsComponent } from './aboutus/iccs/iccs.component';
import { PlacedstudComponent } from './placements/placedstud/placedstud.component';
import { PlacementcommitteeComponent } from './placements/placementcommittee/placementcommittee.component';
const routes: Routes = [
  //{ path: '', redirectTo: '/programmes', pathMatch: 'full' }, // Default route
  { path: 'programmes', component: ProgrammesComponent },
  { path: 'programmes/commerce', component: CommerceComponent },
  { path: 'programmes/computer-it', component: ComputerItComponent },
  { path: 'programmes/postgraduate', component: PostgraduateComponent },
  // {path:"menu",component:MenuBodyComponent},
  // {path:"",redirectTo:"menu",pathMatch:"full"},
  { path: 'alumni', component: AlumniComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'students/activities', component: ActivitiesComponent },
  { path: 'students/sports', component: SportsComponent },
  { path: 'examnotice', component: ExamnoticeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'aboutus/indiragroup', component: IndiragroupComponent },
  { path: 'aboutus/iccs', component: IccsComponent },
  { path: 'placements', component: PlacementsComponent },
  { path: 'placements/placedstud', component:PlacedstudComponent },
  { path: 'placements/placementcommittee', component:PlacementcommitteeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }