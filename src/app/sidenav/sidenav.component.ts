import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  student = {studID:localStorage.getItem("id")};

  showFiller = false;
  hidden = false;
  studid: any;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  

  constructor(
    private activeroute: ActivatedRoute,
    private post: PostService, private route:Router
  ) {}

  ss:any;
  images: any;
  stringObject: any;
  ngOnInit(): void {
    // this.activeroute.paramMap.subscribe((params) => {
    //   this.studid = params.get('did');
    //   console.log(this.studid);
    // });

    this.post.getData(this.student.studID).subscribe((result:any)=>{
      this.images = result.pics;
      console.log(result);
      });

    this.post.studOne(this.student.studID).subscribe((result: any) => {
      this.student = result;
      this.ss = JSON.stringify(this.student);
      this.stringObject = JSON.parse(this.ss);
      console.log(this.stringObject)
    });
  }
}
