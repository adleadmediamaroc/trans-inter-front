import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactClient } from '../api/ContactClient';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClientModule } from '@angular/common/http';

@Injectable()
export class ContactClientService {


    constructor(private http:HttpClient) {}

    public getContactClient(id:bigint):Observable<ContactClient>{
      return this.http.get<ContactClient>(environment.backendHost+"/api/contacts-client/"+id);

    }

    public countContacts(): Observable<number>{
      return this.http.get<number>(environment.backendHost+"/api/contacts-client/Total-Contacts");
  }

  public countInactiveContacts(): Observable<number>{
      return this.http.get<number>(environment.backendHost+"/api/contacts-client/Total-Inactive-Contacts");
  }

  public countActiveContacts(): Observable<number>{
    return this.http.get<number>(environment.backendHost+"/api/contacts-client/Total-Active-Contacts");
  }

  public getContactPrincipalFullName(id: bigint):Observable<string>{
       return this.http.get<string>(environment.backendHost + "/api/contacts-client/contact-principal-fullname/" + id);
    
  }


  

   // deleteClient(id: number) {
   //     return this.http.delete(environment.backendHost+"/delete-client/"+id);
   // }
}
