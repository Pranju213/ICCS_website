import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import the routing module
import { AppComponent } from './app.component'; // Import the main AppComponent
import { ProgrammesComponent } from './programmes/programmes.component'; // Import your components
import { AlumniComponent } from './alumni/alumni.component';
import { StudentsComponent } from './students/students.component';
import { ExamnoticeComponent } from './examnotice/examnotice.component';
import { PlacementsComponent } from './placements/placements.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MenuBodyComponent } from './menu-body/menu-body.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    // You can declare other components here if they are not standalone
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Ensure AppRoutingModule is imported here
    ProgrammesComponent, // Import standalone components here
    AlumniComponent,
    StudentsComponent,
    ExamnoticeComponent,
    PlacementsComponent,
    AboutusComponent,
    AppComponent,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
    // Bootstrap the main AppComponent
})
export class AppModule { }