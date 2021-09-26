import { StudentService } from './../student.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  public id !: number;
  constructor(private service :StudentService , private route : ActivatedRoute) { }
  stdId !:number
  stdName !: string
  stdFee !: number
  stdCourse !: string
  s !: Student;
  
  ngOnInit(): void {
    this.id = Number( this.route.snapshot.paramMap.get('id')) ;
    this.getOneStudent(this.id);
  }

  getOneStudent(id1: number)
  {
    this.service.getOneStudent(id1).subscribe( 
      data => this.s = data,
      error =>
      {
        console.log(error);
      }
      );
    
  }
  onUpdate()
  {
    const temp = 
    { 
      stdId : this.s.stdId,
      stdName:this.s.stdName,
      stdFee:this.s.stdFee,
      stdCourse:this.s.stdCourse 
    }
    this.service.onUpdateStudent(temp).subscribe(
      data => {alert(data)},
      error =>
      {
        console.log(error);
      }
    )
  }

}


