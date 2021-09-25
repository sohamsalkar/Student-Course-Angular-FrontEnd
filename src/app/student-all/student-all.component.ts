import { StudentService } from './../student.service';
import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-all',
  templateUrl: './student-all.component.html',
  styleUrls: ['./student-all.component.css']
})
export class StudentAllComponent implements OnInit {

  students : Student[] =[];
  constructor(private service:StudentService) { }

  ngOnInit(): void {
    this.getAllStudents();
  }
  getAllStudents()
  {
    this.service.getAllStudents().subscribe(
      data => {this.students = data},
      error =>
      {
        this.students = [];
        console.log(error);
      }
    );
  }

  onDelete(id:number)
  {
    this.service.onDeleteStudent(id).subscribe(
      data => {alert(data); this.getAllStudents() },
      error =>
      {
        console.log(error);
      }
    )
  }


}
