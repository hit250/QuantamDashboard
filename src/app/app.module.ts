import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboarddisplayComponent } from './Dashboard/Dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { NotificationComponent } from './notification/notification.component';
import { HamburgermenuComponent } from './hamburgermenu/hamburgermenu.component';
import {enableProdMode} from '@angular/core';
enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    DashboarddisplayComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    AnnouncementComponent,
    NotificationComponent,
    HamburgermenuComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
