import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-labordtr',
  templateUrl: './labordtr.component.html',
  styleUrls: ['./labordtr.component.css']
})
export class LabordtrComponent {

  student = {studID:localStorage.getItem("id")};

  isLinear = false
  dateVal= new Date();
  res: any;

  DTRDetails = new FormGroup({
    studentID: new FormControl(this.student.studID)
  });

  constructor( private post: PostService, private route:Router) { }

  ngOnInit(): void {
    console.log(this.student.studID)
  }

  dtr() {
    console.log(this.DTRDetails.value)
    this.post.saveDTR(this.DTRDetails.value)
      .subscribe((result:any)=>{
        console.log(result)
        this.res = result;
        if (this.res == "ok" ) {
          this.dtrDetails()
        }
      })
  }
  dtrDetails() {
    console.log(this.DTRDetails.value)
    this.post.saveDetails(this.DTRDetails.value)
      .subscribe((result:any)=>{
        console.log(result)
        this.res = result;
        if (this.res == "ok" ) {
          location.reload()
        }
      })
  }
}
