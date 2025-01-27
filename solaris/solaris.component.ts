import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-solaris',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule,MatButtonToggleModule, MatCardModule, MatListModule, MatDividerModule ],
  templateUrl: './solaris.component.html',
  styleUrl: './solaris.component.css'
})
export class SolarisComponent {
  constructor(private router: Router) { }

  contacto() {
    this.router.navigate(['/contacto']);
  }
  productos() {
    this.router.navigate(['/productos']);
  }
  home() {
    this.router.navigate(['/home']);
  }
  solaris() {
    this.router.navigate(['/solaris']);
  }
}
