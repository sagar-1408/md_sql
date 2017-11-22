import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { BusinessPartnerMasterComponent } from './business-partner-master/business-partner-master.component';
import { BusinessPartnerStatusComponent } from './business-partner-status/business-partner-status.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PostsFilterPipe } from "./filter.pipe"
import { FormsModule } from '@angular/forms';
import { BusinessService } from "./business.service"

@NgModule({
  declarations: [
    AppComponent,
    PostsFilterPipe,
    BusinessPartnerMasterComponent,
    BusinessPartnerStatusComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [BusinessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
