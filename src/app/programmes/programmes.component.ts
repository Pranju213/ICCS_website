import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComputerItComponent } from './computer-it/computer-it.component';
import { CommerceComponent } from './commerce/commerce.component';
import { PostgraduateComponent } from './postgraduate/postgraduate.component';

@Component({
  selector: 'app-programmes',
  standalone: true,
  imports: [CommonModule, RouterModule], // Import RouterModule to support routerLink
  templateUrl: './programmes.component.html',
  styleUrls: ['./programmes.component.css']
})
export class ProgrammesComponent {
}
