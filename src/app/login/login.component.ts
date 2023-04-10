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
  Student = new FormGroup({
    email : new FormControl(null),
    password : new FormControl(null)
  })

  constructor( private route:Router, private posting: PostService) { }

  ngOnInit(): void { }

  Login(){
    // this.route.navigate(['/main']);
    console.log(this.Student.value)
    this.posting.Login(this.Student .value).subscribe((result:any)=>{
      console.log(result);
      if(result != '0'){
        console.log(alert("Successfully Login!"))
        this.route.navigate(['/dashboard']);
      }else{
        console.log(alert("Error Login!"))
        this.Student.reset()
      }
    });
  }
  
}
