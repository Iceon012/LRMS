import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { UploadfrofileComponent } from '../uploadfrofile/uploadfrofile.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  studid: any;
  divshow = false;

  UploadImage = new FormGroup({
    files: new FormControl(null)
  });
  selectedFile: any;
  filename: any;
  profile: any;
  uploading: any;
  progress = 0;
  prodnum: any;
  pid: any;
  images: any;

  updateStud = new FormGroup({
    studentID: new FormControl(this),
    studFirstName: new FormControl(null),
    studMiddleName: new FormControl(null),
    studLastName: new FormControl(null),
    studAddress: new FormControl(null),
    birthDate: new FormControl(null),
    studContact: new FormControl(null),
  });

  constructor(
    private _dialog: MatDialog,
    private activeroute: ActivatedRoute,
    private post: PostService,
    private route: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.activeroute.paramMap.subscribe((params) => {
      this.studid = params.get('did');
      console.log(this.studid);
    });

    

    this.post.StudLog(this.studid).subscribe((result: any) => {
      this.studid = result;
      console.log(this.studid[0].stud_id);
      this.pid = this.studid[0].stud_id;


      this.updateStud.controls['studentID'].setValue(this.studid[0].stud_id);
      this.updateStud.controls['studFirstName'].setValue(this.studid[0].fname);
      this.updateStud.controls['studMiddleName'].setValue(
        this.studid[0].middle
      );
      this.updateStud.controls['studLastName'].setValue(this.studid[0].lname);
      this.updateStud.controls['studAddress'].setValue(this.studid[0].address);
      this.updateStud.controls['birthDate'].setValue(this.studid[0].bdate);
      this.updateStud.controls['studContact'].setValue(this.studid[0].contact);
    });

    this.post.getData(this.studid).subscribe((result:any)=>{
      this.images = result.pics;
      console.log(result);
      });
  }

  onUpdate() {
    this.post.UpdateStud(this.updateStud.value).subscribe((result: any) => {
      if (result == 'ok') {
        this.divshow = true;
      }
    });
  }

  onFileSelected(event: any){
    this.selectedFile = event.target.files[0];
    this.filename = this.selectedFile.name;
    }

  onPost() {
    const fd = new FormData();
    if (this.selectedFile != null) {
      console.log(this.selectedFile);
      this.uploading = true;
      fd.append('files', this.selectedFile);
      fd.append('pid', this.pid);
      console.log(fd);

      this.http
        .post('http://localhost/LRMS/saveimage.php', fd, {
          observe: 'events',
          reportProgress: true,
        })
        .subscribe((event: any) => {
          console.log(event);
          if (event.type === HttpEventType.UploadProgress) {
            this.progress = (event.loaded / event.total) * 100;
            
          }
          if (event.type == HttpEventType.Response) {
            this.images = event.body.pics;
            console.log(event);
          }
        });
        
    }
   
  }

  // openDialog(enterAnimationDuration: string, exitAnimationDuration: string) {
  //   localStorage.setItem("id",this.studid);
  //   this._dialog.open(UploadfrofileComponent, {
  //     width: '250px',
  //     enterAnimationDuration,
  //     exitAnimationDuration,
  //   });
  // }
  // openDialog() {
  //   const dialogRef = this._dialog.open(UploadfrofileComponent);

  //   localStorage.setItem("id",this.studid);
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
}
