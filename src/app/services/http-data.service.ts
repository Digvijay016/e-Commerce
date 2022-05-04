import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError,map } from 'rxjs';
import { ComicRequest } from '../shared/models/ComicRequest';

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {
  baseUrl = "http://localhost:3000/posts";

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };

  constructor(private _http: HttpClient) { }

  postComics(data:any){
    return this._http.post<ComicRequest>(this.baseUrl,data).pipe(map((res:any)=>{
      return res;
    }))
  }

  getComics(){
    return this._http.get<ComicRequest>(this.baseUrl).pipe(map((res:any)=>{
      return res;
    }))
  }

  updateComics(data: any, id:number):Observable<ComicRequest>{
    // console.log(data.name);
    // console.log(data.origins);
    // console.log(data.details);
    // console.log(id);
    // console.log(this.baseUrl+"/"+id);
    return this._http.put<ComicRequest>(this.baseUrl+"/"+id,data,this.httpOptions).pipe(map((res:any)=>{
      // console.log(res.id,res.name,res.origins);
      return res;
    }))
  }

  deleteComics(id:number){
    return this._http.delete<ComicRequest>(this.baseUrl+"/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }
}
