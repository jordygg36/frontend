import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganismoService } from '../../services/organismo.service';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-organismo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-organismo.component.html',
  styleUrl: './add-organismo.component.css'
})
export class AddOrganismoComponent {
  newOrganismo: any = {};

  constructor(
    private organismoService: OrganismoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  addUser2() {
    this.organismoService.postUser2(this.newOrganismo).subscribe({
      next: (response) => {
        console.log('organismo agregado:', response);
      },
      error: (error) => {
        console.error('Error al agregar el organismo:', error);
      }
    });
    this.router.navigate(['/organismo']);
  }
}
