import { Component , OnInit } from '@angular/core';
import { AnnouncementObject } from '../../assets/Data/interfaces';
import { HttpClient } from '@angular/common/http';

import { DataFetchService } from '../core/data-fetch.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {

  announcements!: any;
  responce: any;
  constructor(private datafetch: DataFetchService) {}

  ngOnInit() {
    
    this.datafetch.getannouncementData().subscribe(res => {

      this.responce = res;
       this.announcements = this.responce.announcement;
        console.log(this.announcements);
      
      //  console.log(this.data[0].classes);
      
    });
  }
  
  showannouncement(){
    const announcementArea: HTMLElement | null = document.querySelector('.announcementArea');
    const announcementIcon :HTMLElement|null =document.querySelector('.announcement-icon img');
    const badge :HTMLElement|null =document.querySelector('.announcement-icon span');
    

  
    if(announcementIcon && badge && announcementArea)
    {
      announcementArea.style.transform = 'scaleY(1)';
      badge.style.display = 'none';
      announcementIcon.style.filter = 'brightness(0) invert(1)';
      
    }
   
  }
  
  hideannouncement(){
    const announcementArea: HTMLElement|null =document.querySelector('.announcementArea');
    const announcementIcon :HTMLElement|null =document.querySelector('.announcement-icon img');
    const badge :HTMLElement|null =document.querySelector('.announcement-icon span');
  
    if(announcementIcon && badge && announcementArea)
    {
      announcementArea.style.transform = 'scaleY(0)';
      badge.style.display = 'flex';
      announcementIcon.style.filter = 'none';
      badge.style.paddingLeft = '7px';
      
    }

    
    
  }

}
