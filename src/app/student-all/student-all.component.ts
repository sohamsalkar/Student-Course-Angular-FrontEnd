import { StudentService } from './../student.service';
import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-all',
  templateUrl: './student-all.component.html',
  styleUrls: ['./student-all.component.css']
})
export class StudentAllComponent implements OnInit {

  students : Student[] =[];
  constructor(private service:StudentService , private router : Router) { }

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
  onEdit(id:number)
  {
    this.router.navigateByUrl(`edit/${id}`);
  }


}
