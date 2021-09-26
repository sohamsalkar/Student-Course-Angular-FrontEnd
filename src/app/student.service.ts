import { Student } from './student';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  private baseUrl : string = 'http://localhost:8083/student';

  constructor(private http:HttpClient ) {
    
   }


   getAllStudents(): Observable<Student[]>{
     return this.http.get<Student[]>(`${this.baseUrl}/all`);
   }

   onDeleteStudent(id:number):Observable<any>{
     return this.http.delete(`${this.baseUrl}/delete/${id}`,{responseType:"text"});
   }

   onCreateNewStudent(s:any):Observable<any>{
     return this.http.post(`${this.baseUrl}/create`,s,{responseType:"text"});
   }

   getOneStudent(id:number):Observable<Student>{
     return this.http.get<Student>(`${this.baseUrl}/one/${id}`);
   }
   
   onUpdateStudent(u:any):Observable<any>{
     return this.http.put(`${this.baseUrl}/update`,u,{responseType:"text"});
   }
}
