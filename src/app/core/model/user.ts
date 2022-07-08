export module User {
  export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    ssn: number;
    department: string;
    birthday: Date;
    salary: number;
    salaryPercentage: number;
    martialStatus: string;
    address: string;
    isManager: { [key: string]: string };
    skills: any[];
  }
}
