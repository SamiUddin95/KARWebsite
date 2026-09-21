import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { Lawyer, LawyerListResponse, LawyerResponse, LawyerFilterParams } from '@core/models/lawyer.model';

@Injectable({ providedIn: 'root' })
export class LawyerService {
  private http = inject(HttpClient);
  private base = `${environment.apiUrl}/LawyerInfos`;

  getLawyers(params: LawyerFilterParams = {}): Observable<LawyerListResponse> {
    let httpParams = new HttpParams()
      .set('pageNumber', String(params.pageNumber ?? 1))
      .set('pageSize',   String(params.pageSize   ?? 12));

    if (params.search)           httpParams = httpParams.set('search',           params.search);
    if (params.practiceArea)     httpParams = httpParams.set('practiceArea',     params.practiceArea);
    if (params.consultationType) httpParams = httpParams.set('consultationType', params.consultationType);
    if (params.minRating != null) httpParams = httpParams.set('minRating',       String(params.minRating));

    return this.http.get<LawyerListResponse>(this.base, { params: httpParams });
  }

  getLawyerById(id: number): Observable<LawyerResponse> {
    return this.http.get<LawyerResponse>(`${this.base}/${id}`);
  }

  getPublicLawyers(params: LawyerFilterParams = {}): Observable<LawyerListResponse> {
    let httpParams = new HttpParams()
      .set('pageNumber', String(params.pageNumber ?? 1))
      .set('pageSize',   String(params.pageSize   ?? 12));
    return this.http.get<LawyerListResponse>(`${this.base}/public`, { params: httpParams });
  }

  getFeaturedLawyers(): Observable<LawyerListResponse> {
    return this.http.get<LawyerListResponse>(`${this.base}?pageNumber=1&pageSize=6`);
  }
}
