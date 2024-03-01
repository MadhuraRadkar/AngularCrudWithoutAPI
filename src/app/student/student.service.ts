import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class StudentService{
    studList:any=[];
constructor(){
    this.studList=[
        {id:1,name:"Suraj",percentage:72}
    ];
}
public getAllStudents():any{
 return this.studList;
}

public addStudent(stud:any):any{
    this.studList.push({id:stud.id,name:stud.name,percentage:stud.percentage});
}
public updateStudent(stud:any):any{
    for(let i=0;i<this.studList.length;i++){
        if(this.studList[i].id==stud.id){
            this.studList[i].name=stud.name;
            this.studList[i].percentage=stud.percentage;
            break
        }
    }
}

public deleteStudent(id:number){
    let i=0;
    for(;i<this.studList.length;i++){
        if(this.studList[i].id==id)
        {
          break;
        }
    }
    this.studList.splice(i,1);
}
}