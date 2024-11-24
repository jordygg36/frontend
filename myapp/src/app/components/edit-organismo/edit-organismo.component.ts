import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganismoService } from '../../services/organismo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-edit-organismo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-organismo.component.html',
  styleUrl: './edit-organismo.component.css'
})
export class EditOrganismoComponent implements OnInit {
  organismo: any = {}; 

  constructor(
    private organismoService: OrganismoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUserById2();
  }

  getUserById2() {
    const id_organismo = this.route.snapshot.paramMap.get('id_organismo'); 
    if (id_organismo) { 
      this.organismoService.fetchUserById2(id_organismo).subscribe(data => {
        this.organismo = data; 
      }, error => {
        console.error('Error fetching user:', error); 
      });
    }
  }

  onUpdate2() {
    const id_organismo = this.organismo.id_organismo; 
    if (id_organismo) { 
      this.organismoService.updateUser2(id_organismo, this.organismo).subscribe(() => {
        this.router.navigate(['/organismo']); 
      }, error => {
        console.error('Error updating user:', error);
      });
    } else {
      console.error('ID de organismo no disponible para actualización.');
    }
  }
}
