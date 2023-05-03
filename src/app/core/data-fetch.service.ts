import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataObject, CoursesObject , NotificatiObject , AnnouncementObject } from "../../assets/Data/interfaces";

@Injectable({
  providedIn: 'root'
})
export class DataFetchService {

  private url: string;
  private urln: string;
  private urla : string;

  constructor(private http: HttpClient) {
    this.url = "../../assets/Data/data.json";
    this.urln="../../assets/Data/Data1.json";
    this.urla="../../assets/Data/Data2.json";
   }

   getData(): Observable<DataObject> {
    return this.http.get<DataObject>(this.url);
   }

   getNotificationData(): Observable<NotificatiObject>{
    return this.http.get<NotificatiObject>(this.urln);
   }

   getannouncementData(): Observable<AnnouncementObject>{
    return this.http.get<AnnouncementObject>(this.urla);
   }
}
