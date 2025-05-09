import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddPartnerPackageService {
  private baseUrl = '/api/administrator/addPartnerPackage';

  constructor(private http: HttpClient) {}

  addPartnerPackage(partnerId: string, packageData: any): Observable<any> {
    let token = localStorage.getItem('authToken') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    const params = new HttpParams().set('partnerId', partnerId);
    return this.http.post(this.baseUrl, packageData, { headers, params });
  }
}
