import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  invalid = false
  approval = false

  Student = new FormGroup({
    email : new FormControl(null),
    password : new FormControl(null)
  })

  constructor( private route:Router, private posting: PostService) { }

  ngOnInit(): void { }

  Login(){
    // this.route.navigate(['/main']);
    console.log(this.Student.value)
    this.posting.Login(this.Student.value).subscribe((result:any)=>{
      console.log(result);
      if(result == 3){
        this.approval = true;
        this.invalid = false;
        this.Student.reset()
      }
      else if (result > 4){
        localStorage.setItem("id",result);
        this.route.navigate(['/sidenav']);        
      }
      else{
        this.invalid = true;
        this.approval = false;
        this.Student.reset()
      }
    });
  }
  
}
