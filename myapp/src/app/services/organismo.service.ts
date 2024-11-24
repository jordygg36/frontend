import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganismoService {
  URL = 'http://localhost:3000/api/organismo';

  constructor(private http: HttpClient) {}

  fetchUser2(): Observable<any> {
    return this.http.get(this.URL);
  }

  postUser2(organismo: any): Observable<any> {
    return this.http.post(this.URL, organismo);
  }

  updateUser2(id_organismo: string, organismo: any): Observable<any> {
    return this.http.put(`${this.URL}/${id_organismo}`, organismo); // Asegúrate de que la URL esté bien formada
}


  deleteUser2(id_organismo: string): Observable<any> {
    return this.http.delete(`${this.URL}/${id_organismo}`); // Agregar la barra diagonal para que sea correcta la URL
  }


  fetchUserById2(id_organismo: string): Observable<any> {
    return this.http.get(`${this.URL}/${id_organismo}`);
  }
}
