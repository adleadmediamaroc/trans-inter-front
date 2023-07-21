import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{Permission} from '../../models/main.model';

@Injectable({
    providedIn: 'root'
})
export class PermissionService {
    private apiUrl = 'http://localhost:8080/api/permissions';
    constructor(private http: HttpClient) { }

    getPermissions(): Observable<Permission[]> {
        return this.http.get<Permission[]>(`${this.apiUrl+'/afficher'}`);
    }
}
