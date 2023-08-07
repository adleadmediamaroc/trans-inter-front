import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../api/Client';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClientModule } from '@angular/common/http';

@Injectable()
export class ClientService {
    num=0;

    constructor(private http:HttpClient) {}
    

    public countClients(): Observable<number>{
        return this.http.get<number>(environment.backendHost+"/api/clients/Total-Clients");
    }

    public countInactiveClients(): Observable<number>{
        return this.http.get<number>(environment.backendHost+"/api/clients/Total-Inactive-Clients");
    }

    public countActiveClients(): Observable<number>{
        return this.http.get<number>(environment.backendHost+"/api/clients/Total-Active-Clients");
    }


    public getClients():Observable<Client[]>{
      return this.http.get<Client[]>(environment.backendHost+"/api/clients/dto/");
   }

   /*public searchClient(keyword:String):Observable<Array<Client>>{
     return this.http.get<Array<Client>>(environment.backendHost+"/clients/search?keyword="+keyword)
   }*/

    deleteClientById(id: bigint) {
    
       this.http.delete(environment.backendHost+"/api/clients/delete-client/"+id).subscribe();
    }
        
}
