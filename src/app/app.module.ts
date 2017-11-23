import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { BusinessPartnerMasterComponent } from './business-partner-master/business-partner-master.component';
import { BusinessPartnerStatusComponent } from './business-partner-status/business-partner-status.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PostsFilterPipe } from "./filter.pipe"
import { StatusFilterPipe } from "./status_filter.pipe";
import { FormsModule } from '@angular/forms';
import { BusinessService } from "./business.service";
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo:'business_partner_master', pathMatch: 'full'},
  { path: 'business_partner_master', component: BusinessPartnerMasterComponent },
  { path: 'business_partner_status', component: BusinessPartnerStatusComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsFilterPipe,
    StatusFilterPipe,
    BusinessPartnerMasterComponent,
    BusinessPartnerStatusComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule,
    FormsModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [BusinessService],
  bootstrap: [AppComponent],
  exports: [ RouterModule ]
})

export class AppModule { }
