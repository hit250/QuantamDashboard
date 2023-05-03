import { Component , OnInit } from '@angular/core';
import { NotificatiObject } from '../../assets/Data/interfaces';
import { HttpClient } from '@angular/common/http';
import { DataFetchService } from '../core/data-fetch.service';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit{

  notifications!: any;
  responce: any;

  constructor(private datafetch: DataFetchService) {}

  ngOnInit() {
    
    this.datafetch.getNotificationData().subscribe(res => {

      this.responce = res;
      this.notifications = this.responce.notification;
      //console.log(this.notifications);
      
    });

    
    
    
  }
  shownotification(){
    const notificationarea: HTMLElement|null =document.querySelector('.notificationArea');
    const alertIcon :HTMLElement|null =document.querySelector('.alert-icon img');
    const badge :HTMLElement|null =document.querySelector('.alert-icon span');
  
    if(alertIcon && badge && notificationarea)
    {
          notificationarea.style.transform = 'scaleY(1)';
          badge.style.display = 'none';
          alertIcon.style.filter = 'brightness(0) invert(1)';
          badge.style.paddingLeft = '4px';
          
    }
    
  }
  
  hidenotification(){
    const notificationarea: HTMLElement|null =document.querySelector('.notificationArea');
    const alertIcon :HTMLElement|null =document.querySelector('.alert-icon img');
    const badge :HTMLElement|null =document.querySelector('.alert-icon span');

    
  
    if(alertIcon && badge && notificationarea)
    {
      notificationarea.style.transform = 'scaleY(0)';
      alertIcon.style.display = 'flex';
      badge.style.display = 'flex';
      badge.style.paddingLeft = '5px';
      alertIcon.style.filter = 'none';
      
    }

  }

}
