import { Component, OnInit } from '@angular/core';
import { NagpServiceService } from "src/app/services/nagp-service.service";

@Component({
  selector: 'app-viewlevel',
  templateUrl: './viewlevel.component.html',
  styleUrls: ['./viewlevel.component.css']
})
export class ViewlevelComponent implements OnInit {
  public level;
  constructor(private service: NagpServiceService) { }

  ngOnInit() {
    this.getData();
  }
  getData(){
    this.service.getLevel().subscribe(
      data=>{ this.level=data},
      err => console.log(err),
      ()=>console.log("Level loaded")

    );
  }
  
 

}
