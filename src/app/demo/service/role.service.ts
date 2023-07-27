import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from "../api/main";

@Injectable({
    providedIn: 'root'
})
export class RoleService {
    private apiUrl = 'http://localhost:8080/api/roles';

    constructor(private http: HttpClient) { }

    createRoleWithPermissions(roleDto: Role): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.post<any>(`${this.apiUrl}/create-role`, roleDto, httpOptions);
    }
}
