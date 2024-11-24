import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router'; // Asegúrate de importar Router


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']

})
export class UsersComponent implements OnInit {
  arrayUser: any = [];

  constructor(public usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    this.fetch();
  }

  fetch() {
    this.usuarioService.fetchUser().subscribe(result => {
      this.arrayUser = result;
    });
  }
  
  addUser() {
    this.router.navigate(['/agregar-usuario']); // Navegar a la ruta de agregar usuario
  }

  editUser(id_usuario: string) {
    this.router.navigate(['/editar-usuario', id_usuario]); // Navegar a la ruta de editar usuario
  }
  
  deleteUser(id_usuario: string) {
    this.usuarioService.deleteUser(id_usuario).subscribe(() => {
      this.arrayUser = this.arrayUser.filter((user: any) => user.id_usuario !== id_usuario);
    });
  }
}
