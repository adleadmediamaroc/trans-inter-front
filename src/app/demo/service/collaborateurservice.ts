import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Collaborateurs } from '../../models/main.model';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class StaffService {
    private apiUrl = 'http://localhost:8080/api/users/';

    constructor(private http: HttpClient) {
    }

    getCollaborateurs(): Observable<Collaborateurs[]> {
        return this.http.get<Collaborateurs[]>(this.apiUrl);
    }

    deleteCollaborateur(id: any) {
        return this.http.delete<any>(this.apiUrl + 'delete-staff/' + id);
    }
}
