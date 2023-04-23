import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent {

  yrlvl : any = ['I','II','III','IV']
  course : any = ['BSIT','ACT','BSA','BSBA','BSN','BSPsy','ABTh','AB','BSED', 'BEED']
  civil: any = ['Married', 'Single', 'Widow']
  
  ApplicationForm = new FormGroup({
    skills: new FormControl(null),
    pastwork: new FormControl(null),
    yrlevel: new FormControl(null),
    scourse: new FormControl(null),
    sreason: new FormControl(null),
    fname: new FormControl(null),
    mname: new FormControl(null),
    lname: new FormControl(null),
    address: new FormControl(null),
    bdate: new FormControl(null),
    contactno: new FormControl(null),
    schoolid: new FormControl(null),
    status: new FormControl(null),
    pname: new FormControl(null),
    pcontact: new FormControl(null),
    semail: new FormControl(null),
    spass: new FormControl(null),
  })

  constructor( private post: PostService, private route:Router) { }

  SaveFunct(){
    console.log(this.ApplicationForm.value);
    this.post.saveApplication(this.ApplicationForm.value)
      .subscribe((result:any)=>{
        console.log(result)
        if(result == "OK"){
          alert('Successfully')
          this.StudentData();
          this.ApplicationForm.reset()
          this.route.navigate(['/login']);
        }
      })
  }
  StudentData(){
    // console.log(this.productForm.value);
    this.post.saveStudent(this.ApplicationForm.value)
      .subscribe((result:any)=>{
        console.log(result)
      })
  }

}
