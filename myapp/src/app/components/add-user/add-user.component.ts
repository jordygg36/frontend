import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importa FormsModule aquí
  templateUrl: './add-user.component.html', // Usa el archivo de plantilla
  styleUrls: ['./add-user.component.css'] // Usa el archivo de estilos
  
})
export class AddUserComponent {
  newUser: any = {};

  constructor(private usuarioService: UsuarioService,private route: ActivatedRoute,
    private router: Router) {
    
  }

  addUser() {
    this.usuarioService.postUser(this.newUser).subscribe({
      
      next: (response) => {
        console.log('Usuario agregado:', response);
         
      },
      error: (error) => {
        console.error('Error al agregar el usuario:', error);
      },
       
    });
    this.router.navigate(['/usuario']);

  }
}
