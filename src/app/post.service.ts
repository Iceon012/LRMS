import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'http://localhost/LRMS/';

  constructor(private http: HttpClient) { }

  getData(pid:any){
    return this.http.get(this.url + 'saveimg.php?eid=' + pid);
    }

  saveApplication(prod:any){
    return this.http.post(this.url + 'Application.php',JSON.stringify(prod));
  }
  saveDTR(prod:any){
    return this.http.post(this.url + 'dtr.php',JSON.stringify(prod));
  }
  saveDetails(prod:any){
    return this.http.post(this.url + 'dtr_details.php',JSON.stringify(prod));
  }

  saveStudent(prod:any){
    return this.http.post(this.url + 'Student.php',JSON.stringify(prod));
  }

  Login(log: any) {
    return this.http.post(this.url + 'login.php', JSON.stringify(log));
  }

  StudLog(eid: any) {
    return this.http.get(this.url + 'studentDetails.php?eid=' + eid);
  }

  studOne(eid: any) {
    return this.http.get(this.url + 'user.php?eid=' + eid);
  }

  DTR_One(eid: any) {
    return this.http.get(this.url + 'displayDTRdetails.php?did=' + eid);
  }

  dtrDetailsIn(did: any) {
    return this.http.post(this.url + 'updateDtr.php', JSON.stringify(did));
  }

  dtrDetailsOut(did: any) {
    return this.http.post(this.url + 'updateDtr2.php', JSON.stringify(did));
  }

  UpdateStud(log: any) {
    return this.http.post(this.url + 'updateStud.php', JSON.stringify(log));
  }
  
}
