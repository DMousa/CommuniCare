
import { Injectable } from "@angular/core";
import { Idoctor } from "src/app/shared/interfaces/idoctor";
@Injectable()
export class Doctorservice{
    private doctors:Idoctor[];
    constructor()
    {
        this.doctors=[
            {
                name:'sara',
                speciality:'dentist doctor',
                detailedDesc:'it is a detailed description about caradiology',
                photo:'../../../assets//img/demos/restaurant/blog/blog-restaurant-1.png'
            },
            {
                name:'sara hossam',
                speciality:'dentist doctor',
                detailedDesc:'it is a detailed description about dental',
                photo:'../../../assets//img/demos/restaurant/blog/blog-restaurant-1.png' 
            },
            {
                name:'dina',
                speciality:'dentist doctor',
                detailedDesc:'it is a detailed description about nutrition',
                photo:'../../../assets//img/demos/restaurant/blog/blog-restaurant-1.png'  
            }
           
        ];
    }

    public getAll(): Idoctor[] {
        
        return this.doctors;
    }

}
