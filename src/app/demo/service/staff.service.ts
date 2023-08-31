import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Staff } from '../api/Staff';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import {Collaborateurs} from "../api/main";




@Injectable()
export class StaffService {
    private apiUrl = 'http://localhost:8080/api/users/';
    constructor(private http: HttpClient) { }

    listStaff():Observable<Staff[]>{
        return this.http.get<Staff[]>(this.apiUrl);

    }

    getCollaborateurs(): Observable<Collaborateurs[]> {
        return this.http.get<Collaborateurs[]>(this.apiUrl);
    }

    deleteCollaborateur(id: number) {
        return this.http.delete<any>(this.apiUrl + 'delete-staff/' + id);
    }

    addCollaborateur(collaborateur: Collaborateurs){
        return this.http.post(this.apiUrl + 'add-staff', collaborateur);
    }
}
