import { Injectable } from "@angular/core";
import { Idepartment } from "src/app/shared/interfaces/idepartment";

@Injectable()
export class DepartmentService
{
    private departments:Idepartment[];
    constructor()
    {
        this.departments=[
            {
                name:'Cardiology',
                briefDesc:'it is a brief description about caradiology',
                detailedDesc:'it is a detailed description about caradiology',
                photo:'../../../assets//img/demos/restaurant/blog/blog-restaurant-1.png'
            },
            {
                name:'Dental',
                briefDesc:'it is a brief description about dental',
                detailedDesc:'it is a detailed description about dental',
                photo:'../../../assets//img/demos/restaurant/blog/blog-restaurant-1.png' 
            },
            {
                name:'Nutrition',
                briefDesc:'it is a brief description about nutrition',
                detailedDesc:'it is a detailed description about nutrition',
                photo:'../../../assets//img/demos/restaurant/blog/blog-restaurant-1.png'  
            }
           
        ];
    }

    public getAll(): Idepartment[] {
        
                return this.departments;
            }
}