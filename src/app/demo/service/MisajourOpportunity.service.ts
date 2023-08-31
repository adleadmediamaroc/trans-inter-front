import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MisajourOpportunity } from '../api/MisajourOpportunity';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject, catchError, map, tap, throwError } from 'rxjs';

@Injectable()//MisajourOpportunity
export class MisajourOpportunityService {

    private misajoursSubject = new BehaviorSubject<MisajourOpportunity[]>([]);
    constructor(private http:HttpClient) {}

    public getMisajoursOpportunity(id:bigint):Observable<MisajourOpportunity[]>{
      return this.http.get<MisajourOpportunity[]>(environment.backendHost+"/api/misajours-opportunity/Opportunity/"+id+"/misajours");

    }

  addNewMisajour(id: bigint,misajourDto: MisajourOpportunity): Observable<string> {
    const url = environment.backendHost + `/api/misajours-opportunity/Opportunity/${id}/misajours`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(url, misajourDto, httpOptions)
      .pipe(
        map(response => {
          if (response) {
            if (response.status === 'success') {
              return 'L\'opportunity\'s update added successfully';
            }
          } this.misajoursSubject.next([...this.misajoursSubject.value, misajourDto]);

          return 'Une erreur s\'est produite lors de l\'ajout d\'Opportunity';
        }),
        catchError(error => {
          console.log('Error', error);
          throw error;
        })
      );
    }
    
    deleteMisajourOfOpportunity(Id: bigint): Observable<any> {
      const url = `${environment.backendHost}/api/misajours-opportunity/delete-Opportunity-misajour/${Id}`;
      const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
  
      return this.http.delete<string>(url, httpOptions)
        .pipe(
          catchError(error => {
            console.error('Error deleting misajour of opportunity:', error);
            return throwError('Une erreur s\'est produite lors de la suppression d\'Opportunirté');
          })
        );
    }

}
