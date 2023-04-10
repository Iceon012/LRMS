import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  yrlvl : any = ['I','II','III','IV']
  course : any = ['BSIT','ACT','BSA','BSBA','BSN','BSPsy','ABTh','AB','BSED', 'BEED']
  
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

  constructor( private post: PostService) { }

  ngOnInit(): void {  }

  SaveFunct(){
    // console.log(this.productForm.value);
    this.post.saveApplication(this.ApplicationForm.value)
      .subscribe((result:any)=>{
        console.log(result)
        if(result == "OK"){
          this.sample();
        }
      })
  }

  sample(){
    // console.log(this.productForm.value);
    this.post.saveStudent(this.ApplicationForm.value)
      .subscribe((result:any)=>{
        console.log(result)
      })
  }
}
