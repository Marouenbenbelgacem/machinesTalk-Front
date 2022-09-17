import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from '../model/user-model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private  url = 'http://localhost:8087/api/users';
  constructor(private http : HttpClient) { }

  getUsers(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>(this.url).pipe(
      map(res => res));


  }
}
