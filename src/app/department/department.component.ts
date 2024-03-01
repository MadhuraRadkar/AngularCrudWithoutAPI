import { Component, OnInit } from '@angular/core';
import { DepartmentService } from './department.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private deptService:DepartmentService,private fb:FormBuilder) { }
  deptForm=this.fb.group({
    id:[,Validators.required],
    name:[,Validators.required]
  });
   
  isUpdatebtn:boolean=false;
  ngOnInit(): void {
    this.getAllDepartments();
  }
deptList:any=[];
getAllDepartments(){
  this.deptList=this.deptService.getAllDepartments();
  }
  get id(){
    return this.deptForm.get('id');
  }
  get name(){
    return this.deptForm.get('name');
  }
 
  edit(dept:any){

    this.isUpdatebtn=true;
    this.deptForm.setValue({
      id:dept.id,
      name:dept.name
     
    });
    
  }
  delete(id:number){
    let result=confirm('Do you want to delete id '+id+' ?');
    if(result==true)
    {
      this.deptService.deleteDepartment(id);
      this.getAllDepartments();
    }
  
  }
  clearForm()
  {
    this.deptForm.reset();
    this.isUpdatebtn=false;
  }
  saveData(){
    let dept=this.deptForm.value;
    if(!this.isUpdatebtn){
      this.deptService.addDepartment(dept);
    }
   else{
      this.deptService.updateDepartment(dept);
      this.isUpdatebtn=false;
     // this.empForm.get('id')?.enable();
   }
   this.deptForm.reset();
   this.getAllDepartments();
  }



 

}
