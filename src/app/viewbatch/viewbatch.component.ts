import { Component, OnInit } from '@angular/core';
import { NagpServiceService } from "src/app/services/nagp-service.service";

@Component({
  selector: 'app-viewbatch',
  templateUrl: './viewbatch.component.html',
  styleUrls: ['./viewbatch.component.css']
})
export class ViewbatchComponent implements OnInit {
  public batch;
  constructor(private service: NagpServiceService) { }

  ngOnInit() {
    this.getData();
  }
  getData(){
    this.service.getBatch().subscribe(
      data=>{ this.batch=data},
      err => console.log(err),
      ()=>console.log("Batch loaded")

    );
  }


}
