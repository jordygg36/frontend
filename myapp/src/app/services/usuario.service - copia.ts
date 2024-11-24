import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  URL ='http://localhost:3000/api/usuarios/';

  constructor(private http: HttpClient) { }

  fecthUser = async () => {
    await this.http.get(this.URL);

  }

  postUser = async () => {
    //await this.http.post();

  }


  updateUser = async () => {

  }

  deleteUser = async () => {

  }



}
