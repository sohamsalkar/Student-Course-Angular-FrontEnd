import { StudentService } from './../student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  stdName !: string
  stdFee !: number
  stdCourse !: string
  constructor(private service:StudentService) { }

  ngOnInit(): void {
  }
  
  onAdd()
  {
    const temp = 
    { 
      stdName:this.stdName,
      stdFee:this.stdFee,
      stdCourse:this.stdCourse 
    }
    this.service.onCreateNewStudent(temp).subscribe(
      data => {alert(data)},
      error =>
      {
        console.log(error);
      }
    )
  }

}
