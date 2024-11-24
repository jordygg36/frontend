import { Component, OnInit } from '@angular/core';
import { OrganismoService } from '../../services/organismo.service';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';

@Component({
  selector: 'app-organismo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './organismo.component.html',
  styleUrl: './organismo.component.css'
})
export class OrganismoComponent implements OnInit {
  arrayOrganismo: any = [];

  constructor(public organismoService: OrganismoService, private router: Router) {}

  ngOnInit(): void {
    this.fetch2();
  }

  fetch2() {
    this.organismoService.fetchUser2().subscribe(result => {
      this.arrayOrganismo = result;
    });
  }
  
  addUser2() {
    this.router.navigate(['/agregar-organismo']); // Navegar a la ruta de agregar organismo
  }

  editUser2(id_organismo: string) {
    this.router.navigate(['/editar-organismo', id_organismo]); // Navegar a la ruta de editar organismo
  }
  
  deleteUser2(id_organismo: string) {
    this.organismoService.deleteUser2(id_organismo).subscribe(() => {
      this.arrayOrganismo = this.arrayOrganismo.filter((user: any) => user.id_organismo !== id_organismo);
    });
  }
}
