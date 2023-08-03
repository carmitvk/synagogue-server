import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, ReplaySubject, Subject, of } from 'rxjs';
import { catchError, finalize, take, tap } from 'rxjs/operators';
import { MOCK_VIEWS_DATA, View } from 'src/app/models/view.interface';
import { ViewsApiService } from '../api/views-api.service';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class ViewsDataService {
  private _data = new BehaviorSubject<Array<View>>(null);
  private _isLoading = new BehaviorSubject<boolean>(false);
  public isLoading$: Observable<boolean>;

  public data$: Observable<Array<View>>;



  constructor(private viewsApiService: ViewsApiService) {
    this.data$ = this._data.asObservable();
    this.isLoading$ = this._isLoading.asObservable();
  }

  public loadViewsData(): void {
    this._isLoading.next(true);
    this.viewsApiService.getViewsData().pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('the error is:' + JSON.stringify(error, null, 2));
        return of(MOCK_VIEWS_DATA);
      }),
      tap((value: Array<View>) => this._data.next(value)),
      // tap((value: Array<View>) => console.log('the code is:' + JSON.stringify(value, null, 2))),
      take(1),
      finalize(() => this._isLoading.next(false)),
    ).subscribe();
  }

  public updateData(newValue: View[]): Observable<string>  {
    this._isLoading.next(true);
    return this.viewsApiService.updateViewsData(JSON.stringify(newValue)).pipe(
      tap(() => this._data.next(newValue)),
      take(1),
      finalize(() => this._isLoading.next(false)),
    );
  }
}
