import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Imembers } from '../interfaces/imembers';


@Injectable({
  providedIn: 'root'
})

export class MembersService {

  private myAppUrl : string;
  private myApiUrl : string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/members/';
  }

    getListMembers(): Observable<Imembers[]> {
      return this.http.get<Imembers[]>(`${this.myAppUrl}${this.myApiUrl}`);
}
}
