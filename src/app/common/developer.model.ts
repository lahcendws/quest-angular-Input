import { Skill } from "./skill.model";

export class Developer {
    
        public firstname: string;
        public lastname: string;
        public age: number;
        public sexe: string;
        public bio: string;
        public skills:Skill[];

        constructor(firstname: string, lastname: string,age:number,sexe:string,bio:string,skills:Skill[]) {
                this.firstname = firstname;
                this.lastname = lastname;
                this.age = age;
                this.sexe = sexe;
                this.bio = bio;
                this.skills=skills;
            }
            

      
    

}