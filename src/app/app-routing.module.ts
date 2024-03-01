import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from './student/student.component';


const routes: Routes = [{path:'',redirectTo:'',pathMatch:'full'},
{path:'Department',component:DepartmentComponent},
{path:'Employee',component:EmployeeComponent},
{path:'Student',component:StudentComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
