import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'statusfilter'
})
@Injectable()
export class StatusFilterPipe implements PipeTransform {

  constructor() {}

  transform(statusdata: any[], filterOptions: {[key: string]: any } ): any[] {
    var customer_code = filterOptions.customer_code
    var suppliers = filterOptions.suppliers

    //console.log(obj.customer_code);
    if (!statusdata) { return []};
        if (!customer_code && !suppliers) { return statusdata; }
            return statusdata.filter( s => {
                if (s && String(s.customer_code) == undefined && s.suppliers == undefined) { return true; }
                if ( customer_code && String(s.customer_code).toLowerCase().includes(customer_code)) {
                    if ( !suppliers || (suppliers && s.suppliers.toLowerCase().includes(suppliers))) { return true;}
                }
                else if (suppliers && s.suppliers.toLowerCase().includes(suppliers)) {
                    if( !customer_code || String(s.customer_code).toLowerCase().includes(customer_code)) { return true; }
                }
                return false;
            });
    }
}
