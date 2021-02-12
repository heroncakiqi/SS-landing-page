import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSub: Subject<any> = new Subject<any>();
  public data = this.dataSub.asObservable();

  private url = 'http://localhost:4200/api';

  constructor(private http: HttpClient) { }

  getData(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
      })
     };

    this.http.get(this.url, httpOptions).subscribe(data => {
      this.dataSub.next(data);
    });
  }
}
