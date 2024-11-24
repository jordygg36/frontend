import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: any = {}; 

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUserById();
  }

  getUserById() {
    const id_usuario = this.route.snapshot.paramMap.get('id_usuario'); 
    if (id_usuario) { 
      this.usuarioService.fetchUserById(id_usuario).subscribe(data => {
        this.user = data; 
      }, error => {
        console.error('Error fetching user:', error); 
      });
    }
  }

  onUpdate() {
    const id_usuario = this.user.id_usuario; 
    if (id_usuario) { 
      this.usuarioService.updateUser(id_usuario, this.user).subscribe(() => {
        this.router.navigate(['/usuario']); 
      }, error => {
        console.error('Error updating user:', error);
      });
    } else {
      console.error('ID de usuario no disponible para actualización.');
    }
  }
}
