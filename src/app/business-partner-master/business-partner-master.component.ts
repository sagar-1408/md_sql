import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';
import { BusinessService } from '../business.service';
@Component({
  selector: 'business-partner-master',
  templateUrl: './business-partner-master.component.html',
  styleUrls: ['./business-partner-master.component.css']
})
export class BusinessPartnerMasterComponent  {
  posts : any[];
  // constructor(http: Http) {
  //   http.get('http://192.168.10.48:3000/vender_data?query=all')
  //     .subscribe(response =>{
  //       this.posts = response.json().data.allData;
  //     });
  //  }
  constructor(private service: BusinessService){

  }
  ngOnInit(){
    this.service.BusinessPartnerDetail().subscribe(res => {this.posts = res.json().data.allData})
  }

   download_event(event){
    console.log("hello world...");
  }

  filtersSettings(f){
    console.log(f);
  }
}
