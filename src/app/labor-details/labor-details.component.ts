import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-labor-details',
  templateUrl: './labor-details.component.html',
  styleUrls: ['./labor-details.component.css']
})
export class LaborDetailsComponent {

  student = {dtrID:localStorage.getItem("id")};

  LaborDetails = new FormGroup({
    studentID: new FormControl(this.student.dtrID)
  });

  res: any;

  constructor( private post: PostService, private route:Router) { }

  ngOnInit(): void {
    console.log(this.student.dtrID)
  }

  dtrDetails() {
    console.log(this.LaborDetails.value)
    this.post.saveDTR(this.LaborDetails.value)
      .subscribe((result:any)=>{
        console.log(result)
        this.res = result;
        if (this.res == "ok" ) {
          location.reload()
        }
      })
  }

}
