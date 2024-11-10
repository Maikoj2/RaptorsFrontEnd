import { StatusData } from "@/models";


export interface staffDataContext {
    status: string
    message: string
    Data: DataApp[]
    total: number
  }
  export interface DataApp {
    _id:              string;
    id_BaseSalary:    string;
    position:         string;
    valuePerHour:     number;
    BaseSalary:       number;
    profession:       string;
    TypeSalary:       string;
    Persona_id:       string;
    Personaid:        string;
    IdType:           string;
    Names:            string;
    SureNames:        string;
    Gender:           string;
    neighborhood:     string;
    Address:          string;
    Phone:            string;
    occupation:       string;
    email:            string;
    EPS:              string;
    img:              string;
    DateofBirth:      Date;
    DepartamentBirth: string;
    MunicipeBirth:    string;
    user_id:          string;
    userNames:        string;
    useremail:        string;
    role:             string;
    createdAt:        Date;
    updatedAt:        Date;
}

  export interface apiStaffData {
    ok:      boolean;
    message: string;
    Data:    staffData[];
    total:   number;
}
  export interface apiAStaff {
    ok:      boolean;
    message: string;
    Data:    staffData;
    total:   number;
}
  export interface staffData {
    _id:           string;
    id_BaseSalary: IDBaseSalary;
    profession:    string;
    TypeSalary:    string;
    id:            IDPersonalData;
    createdAt:     Date;
    updatedAt:     Date;
}
  export interface IDPersonalData {
    _id:              string;
    id:               string;
    IdType:           string;
    Names:            string;
    SureNames:        string;
    Gender:           string;
    neighborhood:     string;
    Address:          string;
    Phone:            string;
    occupation:       string;
    email:            string;
    EPS:              string;
    img:              string;
    DateofBirth:      Date;
    DepartamentBirth: string;
    MunicipeBirth:    string;
    user:             UserCreater;
    role:             string;
    createdAt:        Date;
    updatedAt:        Date;
}
export interface UserCreater {
    _id:   string;
    Names: string;
    email: string;
}

export interface IDBaseSalary {
    _id:          string;
    position:     string;
    valuePerHour: number;
    BaseSalary:   number;
}
export const IDBaseSalaryEmptyState:IDBaseSalary = {
    _id:          '',
    position:     '',
    valuePerHour: 0,
    BaseSalary: 0,
}
export const UserCreaterEmptyState:UserCreater = {
    _id:   '',
    Names:   '',
    email: '',
}
export const IDPersonalDataEmptysState:IDPersonalData = {
    _id:              '',
    IdType:           '',
    id:               '',
    Names:            '',
    SureNames:        '',
    Gender:           '',
    neighborhood:     '',
    Address:          '',
    Phone:            '',
    occupation:       '',
    email:            '',
    EPS:              '',
    img:              '',
    DateofBirth:      new Date(),
    DepartamentBirth: '',
    MunicipeBirth:    '',
    user:             UserCreaterEmptyState,
    role:             '',
    createdAt:        new Date(),
    updatedAt:        new Date(),
}
export const staffDataEmptyState :DataApp[] = [{
    _id:              '',
    id_BaseSalary:    '',
    position:         '',
    valuePerHour:      0,
    BaseSalary:        0,
    profession:       '',
    TypeSalary:       '',
    Persona_id:       '',
    Personaid:        '',
    IdType:           '',
    Names:            '',
    SureNames:        '',
    Gender:           '',
    neighborhood:     '',
    Address:          '',
    Phone:            '',
    occupation:       '',
    email:            '',
    EPS:              '',
    img:              '',
    DateofBirth:      new Date(),
    DepartamentBirth: '',
    MunicipeBirth:    '',
    user_id:          '',
    userNames:        '',
    useremail:        '',
    role:             '',
    createdAt:        new Date(),
    updatedAt:        new Date(),
},]

export const staffDataContextEmptyState: staffDataContext ={
    status: StatusData.NO_OBTAINED,
    message: '',
    Data: staffDataEmptyState,
    total: 0
  }





