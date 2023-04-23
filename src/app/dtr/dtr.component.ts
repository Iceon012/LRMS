import { Component } from '@angular/core';
import { LabordtrComponent } from '../labordtr/labordtr.component';
import {LaborDetailsComponent} from '../labor-details/labor-details.component';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-dtr',
  templateUrl: './dtr.component.html',
  styleUrls: ['./dtr.component.css']
})
export class DTRComponent {

  student = {studID:localStorage.getItem("id")};

  dateVal= new Date();
  options:any;
  dateString:any;
  studid: any;

  constructor(private _dialog: MatDialog, private modalService: NgbModal, private activeroute: ActivatedRoute,
    private post: PostService, private route:Router){}

  change = true
  stringObject: any;
  ss:any;
  timeout: any;

  DTR: any;
  DTRs: any;
  stringObjectDTR: any;

  myStringNumber: any;
  myNumber: any;


  ngOnInit(): void {

    this.activeroute.paramMap.subscribe(params =>{
      this.studid = params.get('did');
      console.log(this.studid);
    })



    this.post.studOne(this.student.studID).subscribe((result: any) => {
      this.student = result;
      this.ss = JSON.stringify(this.student);
      this.stringObject = JSON.parse(this.ss);
      console.log(this.stringObject)
    });

    this.post.DTR_One(this.student.studID).subscribe((result: any) => {
      this.DTR = result;
      this.DTRs = JSON.stringify(this.DTR);
      this.stringObjectDTR = JSON.parse(this.DTRs);
      console.log(this.stringObjectDTR)
     
    });


    this.options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    this.dateString = this.dateVal.toLocaleDateString('en-US', this.options);

  }

  changeStateIn() {
    this.change = !this.change
  }

  dtr: any;
  date: any;

  updateDTR= new FormGroup({
    IDdetails: new FormControl(null),
    workdone: new FormControl(null)
  })

  onConfirm(content: any, id: any, dates: any){
    this.dtr = id;
    this.date = dates;

    console.log(this.date, this.dtr)
    this.modalService.open(content).result.then((result)=>{
      console.log(result)
      if(result==1){
        
        this.updateDTR.controls['IDdetails'].setValue(this.dtr);

        console.log(this.updateDTR.value);
        this.onUpdateIn();
      }
    });
  }

  onConfirm2(content: any, id: any, dates: any){
    this.dtr = id;
    this.date = dates;

    console.log(this.date, this.dtr)
    this.modalService.open(content).result.then((result)=>{
      console.log(result)
      if(result==1){
        
        this.updateDTR.controls['IDdetails'].setValue(this.dtr);

        console.log(this.updateDTR.value);
        this.onUpdateOut();
      }
    });
  }


  onUpdateIn(){
    this.post.dtrDetailsIn(this.updateDTR.value).subscribe((result:any)=>{
      console.log(result)
     if(result=="ok"){
      location.reload()
     }
    })
  }

  onUpdateOut(){
    this.post.dtrDetailsOut(this.updateDTR.value).subscribe((result:any)=>{
      console.log(result)
     if(result=="ok"){
      location.reload()
     }
    })
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string) {
    localStorage.setItem("id",this.studid);
    this._dialog.open(LabordtrComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
