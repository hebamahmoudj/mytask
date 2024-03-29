import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _HttpClient:HttpClient) { }
  baseUrl:string="https://reqres.in/api/users"

  getAllUsers(page:number=1):Observable<any>{
    return this._HttpClient.get(this.baseUrl+`?page=${page}`)

  }
  getuserdetails(id:string|null):Observable<any>{
    return this._HttpClient.get(this.baseUrl+`/${id}`)
  }
}
