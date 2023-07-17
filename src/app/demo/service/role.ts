import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Collaborateurs, Role, RolePermission} from '../../models/main.model';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class RoleService {
    private apiUrl = 'http://localhost:8080/api/roles/';

    constructor(private http: HttpClient) {
    }

    getRole(): Observable<Role[]> {
        return this.http.get<Role[]>(this.apiUrl);
    }
    addRole(role: Role): Observable<Role>{
        return this.http.post<Role>(this.apiUrl + 'create-role', role);
    }
    deleteRole(id: any) {
        return this.http.delete<any>(this.apiUrl + 'delete-role/' + id);
    }

    addRolePermission(id: any):Observable<RolePermission>{
        return this.http.post('http://localhost:8080/rolepermissions/afficher',id);
    }


}
