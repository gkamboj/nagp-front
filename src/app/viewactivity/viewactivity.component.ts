import { Component, OnInit } from '@angular/core';
import { NagpServiceService } from "src/app/services/nagp-service.service";

@Component({
  selector: 'app-viewactivity',
  templateUrl: './viewactivity.component.html',
  styleUrls: ['./viewactivity.component.css']
})
export class ViewactivityComponent implements OnInit {
  public activity;
  constructor(private service: NagpServiceService) { }

  ngOnInit() {
    this.getData();
  }
  getData(){
    this.service.getActivity().subscribe(
      data=>{ this.activity=data
      console.log(data)},
      err => console.log(err),
      ()=>console.log("Activity loaded")

    );
  }

}
