import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http/src/static_response';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BusinessService {

  //private url = "http://192.168.10.48:3000/vender_data?query=all";
  private url ="http://131614ab.ngrok.io/vender_data?query=all";


  constructor(private http: Http) { }

  BusinessPartnerDetail(){
    return this.http.get(this.url);
  }
  
  StatusData() {
    return statusdata;
      
  }
}

const statusdata = {data:[
          {
              "id": "1",
              "customer_code": 100001,
              "suppliers": "リーバイ・ストラウス・ジャパン　株式会社",
              "business_type": "RO",
              "order_transmission_method": "ＨＵＬＦＴ",
              "WEB_EDI_setting_status": "本番",
              "tag_kind": "旧型",
              "slip": "ＴＡ",
              "tag_growth_rate": 5
          },
          {
              "id": "2", 
              "customer_code": 100002,
              "suppliers": "リージャパン　株式会社",
              "business_type": "FR",
              "order_transmission_method": "ＨＵＬＦＴ",
              "WEB_EDI_setting_status": "本番",
              "tag_kind": "旧型",
              "slip": "Ａ４",
              "tag_growth_rate": 5
          },
          {
              "id": "3",  
              "customer_code": 100003,
              "suppliers": "株式会社　クラックオン",
              "business_type": "FR",
              "order_transmission_method": "本部発行",
              "WEB_EDI_setting_status": "未設定",
              "tag_kind": "旧型",
              "slip": "Ａ４",
              "tag_growth_rate": 5
          },
          {
              "id": "4",                    
              "customer_code": 100004,
              "suppliers": "株式会社　エドウィン",
              "business_type": "CH",
              "order_transmission_method": "ＨＵＬＦＴ",
              "WEB_EDI_setting_status": "本番",
              "tag_kind": "旧型",
              "slip": "Ａ４",
              "tag_growth_rate": 5
          },
          {
              "id": "5",                    
              "customer_code": 100005,
              "suppliers": "イー・ジーニング 株式会社",
              "business_type": "CH",
              "order_transmission_method": "ＨＵＬＦＴ",
              "WEB_EDI_setting_status": "未設定",
              "tag_kind": "旧型",
              "slip": "Ａ４",
              "tag_growth_rate": 5
          }
      ]
    }