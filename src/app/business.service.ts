import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BusinessService {

  private url = "http://192.168.10.48:3000/vender_data?query=all";


  constructor(private http: Http) { }

  BusinessPartnerDetail(){
    return this.http.get(this.url);
  }

}
