import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { NagpServiceService } from "src/app/services/nagp-service.service";
import { Observable } from "rxjs";
@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {
 models: string[] = [
   'Level 1',
   'Level 2',
   'Level 3',
    'Level 4'
]
  constructor(private nagpService: NagpServiceService) { }
  levelform: FormGroup
  validMessage: string = ""

  ngOnInit() {
    this.levelform = new FormGroup({
      levelId:new FormControl('',),
      levelNumber: new FormControl('',Validators.required),
      levelName: new FormControl('',Validators.required),
      levelDesc: new FormControl('',Validators.required),
      qualifyPoints: new FormControl('',Validators.required)
    })
  }
  submitRegistration(){
     if(this.levelform.valid){
       this.validMessage = " Submitted Successfully"
       this.nagpService.createLevel(this.levelform.value).subscribe(
         data=>{
           this.levelform.reset();
           return true;
         },
         error=>{
           return Observable.throw(error);
           
         }
       )
     }
     else{
       this.validMessage = "please fill the form"
     }
  }

}
