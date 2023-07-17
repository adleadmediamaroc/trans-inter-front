import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Collaborateurs, Permission, Role} from '../../models/main.model';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PermissionService {
    private apiUrl = 'http://localhost:8080/api/permissions';

    constructor(private http: HttpClient) {
    }

    getPermissions(): Observable<Permission[]> {
        return this.http.get<Permission[]>(this.apiUrl);
    }


}
