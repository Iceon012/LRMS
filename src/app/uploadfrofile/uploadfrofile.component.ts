import { Component } from '@angular/core';

@Component({
  selector: 'app-uploadfrofile',
  templateUrl: './uploadfrofile.component.html',
  styleUrls: ['./uploadfrofile.component.css']
})
export class UploadfrofileComponent {

  student = {studID:localStorage.getItem("id")};
  ngOnInit(): void {
    console.log
  }


}
