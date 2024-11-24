import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  URL = 'http://localhost:3000/api/usuarios';

  constructor(private http: HttpClient) {}

  fetchUser(): Observable<any> {
    return this.http.get(this.URL);
  }

  postUser(users: any): Observable<any> {
    return this.http.post(this.URL, users);
  }

  updateUser(id_usuario: string, users: any): Observable<any> {
    return this.http.put(`${this.URL}/${id_usuario}`, users); // Asegúrate de que la URL esté bien formada
}


  deleteUser(id_usuario: string): Observable<any> {
    return this.http.delete(`${this.URL}/${id_usuario}`); // Agregar la barra diagonal para que sea correcta la URL
  }


  fetchUserById(id_usuario: string): Observable<any> {
    return this.http.get(`${this.URL}/${id_usuario}`);
  }
  
  
  
}

