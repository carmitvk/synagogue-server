import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, of } from 'rxjs';
import { tap, catchError, take, finalize, takeUntil, filter } from 'rxjs/operators';
import { View } from 'src/app/models/view.interface';
import { ViewsApiService } from 'src/app/services/api/views-api.service';
import { ViewsDataService } from 'src/app/services/data/views-data.service';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-json-viewer',
  templateUrl: './json-viewer.component.html',
  styleUrls: ['./json-viewer.component.scss']
})
export class JsonViewerComponent implements OnInit, OnDestroy{
  private subscription: Subject<any> = new Subject<any>();
  public text: any = '';
  public dataChanged: boolean = false;
  @ViewChild('editor') editor;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, 
              public viewsDataService: ViewsDataService, private snackBar: MatSnackBar, 
              public dialog: MatDialog) {
    this.viewsDataService.data$.pipe(
      tap(value => this.text =  JSON.stringify(value, null, 2)),
      tap(() => this.dataChanged = false),
      takeUntil(this.subscription),
    ).subscribe();
   }

  ngOnInit(): void {
  }

  public cancel(): void {
    this.router.navigate(['/'], {relativeTo: this.activatedRoute});
  }

  public saveChanges(): void {
    let resualt:View[];
    //check validation
    try{
      resualt = JSON.parse(this.text);
    }
    catch (error) {
      this.snackBar.open(error, 'Close');
      console.log('failed to parse the json');
      return;
    }
    this.viewsDataService.updateData(resualt).pipe(
      tap(() => this.router.navigate(['/'], {relativeTo: this.activatedRoute})),
      catchError((error: HttpErrorResponse) => {
        let message = error?.message || JSON.stringify(error.message, null, 2);
        this.snackBar.open('failed to send the request to the server:' + message, 'Close');
        return of();
      }),
    ).subscribe();
  }

  public openDialog(operation: String): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: {message: `Are you sure you want to ${operation}?` }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        switch (operation) {
          case 'save': 
            this.saveChanges();
            break;
          case 'reset':
            this.resetChanges();
            break;
        }
      } else {
        return;
      }
    });
  }

  public onChange(code) {
    if (!!code && !this.dataChanged) {
      this.viewsDataService.data$.pipe(
        filter((value) => code !== JSON.stringify(value, null, 2)),
        tap(() => this.dataChanged = true),
        take(1),
      ).subscribe();
    }
  }

  public resetChanges() {
    this.viewsDataService.data$.pipe(
      tap(value => this.text =  JSON.stringify(value, null, 2)),
      tap(() => this.dataChanged = false),
      take(1),
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.next();
    this.subscription.complete();
  }

}
