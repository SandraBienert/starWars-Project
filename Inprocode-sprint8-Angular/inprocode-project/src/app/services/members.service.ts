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

  deleteMember(id: undefined): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
}

saveMember(member: Imembers): Observable<void> {
  return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, member);
}

getMember(id: number): Observable<Imembers> {
  return this.http.get<Imembers>(`${this.myAppUrl}${this.myApiUrl}${id}`);
}

updateMember(id: number, member: Imembers): Observable<void> {
  return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, member);
}
}
