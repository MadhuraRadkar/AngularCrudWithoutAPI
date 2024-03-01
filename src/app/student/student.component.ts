import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studService:StudentService,private fb:FormBuilder) { }

  studForm = this.fb.group({
  id:[,Validators.required],
  name:['',Validators.required],
  percentage:[,Validators.required]
  });
  isUpdatebtn:boolean=false;
  ngOnInit(): void {
    this.getAllStudents();
  }
  studList:any=[];
  getAllStudents(){
    this.studList=this.studService.getAllStudents();
  }
get id(){
  return this.studForm.get('id');
}
get name(){
  return this.studForm.get('name');
}
get percentage(){
  return this.studForm.get('percentage');
}

edit(stud:any){
  this.isUpdatebtn=true;
  this.studForm.setValue({
    id:stud.id,
    name:stud.name,
    percentage:stud.percentage
  });
}

delete(id:number){
  let result=confirm('Do you want to delete id'+id+'?');
  if(result==true){
    this.studService.deleteStudent(id);
    this.getAllStudents();
  }
}

clearForm(){
  this.studForm.reset();
  this.isUpdatebtn=false;
}

saveData(){
  let stud=this.studForm.value;
  if(!this.isUpdatebtn){
    this.studService.addStudent(stud);
  }
  else{
    this.studService.updateStudent(stud);
    this.isUpdatebtn=false;

  }
  this.studForm.reset();
  this.getAllStudents();
}
}
