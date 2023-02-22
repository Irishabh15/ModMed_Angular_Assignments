export class User{
    fullname:string;
    collegename:string;
    degree:string;
    specialization:string;

    constructor(fullname:string, collegename:string, degree:string, specialization:string){
        this.fullname = fullname;
        this.collegename = collegename;
        this.degree = degree;
        this.specialization = specialization;
    }
}