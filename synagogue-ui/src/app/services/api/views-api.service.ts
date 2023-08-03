import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { View } from 'src/app/models/view.interface';

@Injectable({
  providedIn: 'root',
})
export class ViewsApiService {
  constructor(private http: HttpClient) { }

  public getViewsData(): Observable<Array<View>> {
    return this.http.get<Array<View>>(`api/views-data`);
  }

  public updateViewsData(viewsData: string): Observable<string> {
    return this.http.post<string>(`api/views-data`, {viewsData});
  }

}
