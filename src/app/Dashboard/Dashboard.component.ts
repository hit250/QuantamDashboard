import { Component, OnInit } from '@angular/core';
import { DataObject, CoursesObject } from '../../assets/Data/interfaces';
import { HttpClient } from '@angular/common/http';
import { DataFetchService } from '../core/data-fetch.service';


@Component({
  selector: 'app-Dashboard',
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.scss']
})

export class DashboarddisplayComponent implements OnInit{

  courses: CoursesObject[] = [];
  data!: DataObject; 

  constructor(private datafetch: DataFetchService) {
   }

   
   ngOnInit() {
    
    this.datafetch.getData().subscribe(res => {
      this.data = res;
      this.courses = this.data.courses;

      console.log(this.courses);
      
    });

    
    
    
  }
}

