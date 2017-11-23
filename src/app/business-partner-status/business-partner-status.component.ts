import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../business.service';

@Component({
  selector: 'business-partner-status',
  templateUrl: './business-partner-status.component.html',
  styleUrls: ['./business-partner-status.component.css']
})
export class BusinessPartnerStatusComponent implements OnInit {
  statusdata;
  constructor(private service: BusinessService) { }

  ngOnInit() {
    this.statusdata = this.service.StatusData().data;
    //console.log(this.statusdata);
  }
  
}
