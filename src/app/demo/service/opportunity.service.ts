import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { opportunity } from '../api/opportunity';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import {BehaviorSubject, catchError, map, tap, throwError } from 'rxjs';

@Injectable()
export class OpportunityService {


    constructor(private http:HttpClient) {}
    private opportunitiesSubject = new BehaviorSubject<opportunity[]>([]);
    opportunies$: Observable<opportunity[]> = this.opportunitiesSubject.asObservable();


    getOpportunities():Observable<opportunity[]>{
      return this.http.get<opportunity[]>(environment.backendHost+"/api/opportunities/dto/");
    }

    addNewOpportunity(opportunityDto: opportunity): Observable<string> {
      const url = environment.backendHost + '/api/opportunities/add-opportunity';
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

    
      return this.http.post<any>(url, opportunityDto, httpOptions)
        .pipe(
          map(response => {
            if (response.status === 'success') {
              return 'L\'opportunité a été ajouté avec succès';
            
            } this.opportunitiesSubject.next([...this.opportunitiesSubject.value, opportunityDto]);

            return 'Une erreur s\'est produite lors de l\'ajout d\'opportunité';
          }),
          catchError(error => {
            console.log('Error', error);
            throw error;
          })
        );
    }

    updateOpportunity(id: bigint, opportunityDto: opportunity): Observable<any> {
      const url = `${environment.backendHost}/api/opportunities/update-opportunity/${id}`;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
  
      
      return this.http.post<any>(url, opportunityDto, httpOptions).pipe(
        tap(() => {
          
          const updatedOpportunities = this.opportunitiesSubject.value.map(opportunity => {
            if (opportunity.opportunityid === id) {
              return { ...opportunity, ...opportunityDto }; 
            }
            return opportunity;
          });
    
          this.opportunitiesSubject.next(updatedOpportunities);
        }),
        catchError(error => {
          console.log('Error updating opportunity:', error);
          throw error;
        })
      );
    }             
}
