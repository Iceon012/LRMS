import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'http://localhost/LRMS/';

  constructor(private http: HttpClient) { }

  saveApplication(prod:any){
    return this.http.post(this.url + 'Application.php',JSON.stringify(prod));
  }
  saveStudent(prod:any){
    return this.http.post(this.url + 'Student.php',JSON.stringify(prod));
  }

  Login(log: any) {
    return this.http.post(this.url + 'login.php', JSON.stringify(log));
  }
}
