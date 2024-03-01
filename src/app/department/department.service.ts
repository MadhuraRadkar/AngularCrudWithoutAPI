import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class DepartmentService{
    deptList:any=[];
constructor(){
    this.deptList=[
        {id:1,name:"Admin"}
    ];
}
public getAllDepartments():any{
 return this.deptList;
}

public addDepartment(dept:any):any{
    this.deptList.push({id:dept.id,name:dept.name});
}
public updateDepartment(dept:any):any{
    for(let i=0;i<this.deptList.length;i++){
        if(this.deptList[i].id==dept.id){
            this.deptList[i].name=dept.name;
           
            break
        }
    }
}

public deleteDepartment(id:number){
    let i=0;
    for(;i<this.deptList.length;i++){
        if(this.deptList[i].id==id)
        {
          break;
        }
    }
    this.deptList.splice(i,1);
}
}