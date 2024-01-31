import { StatusData } from "@/models";
import { UserCreater } from "./apiStaff.types";



export interface BaseSalaryDataContext {
    status: string
    message: string
    Data: BaseSalaryDataApp[]
    total: number
  }


  export interface BaseSalaryDataApp {
    _id:          string;
    position:     string;
    valuePerHour: number;
    BaseSalary:   number;
    User_id:         string;
    UserNames:         string;
    UserEmail:         string;
    createdAt: Date;
    updateAt: Date;
}
export interface ApiBaseSalary {
  _id:          string;
  position:     string;
  valuePerHour: number;
  BaseSalary:   number;
  User: UserCreater;
  createdAt: Date;
  updateAt: Date;
}
export interface apiBaseSalaryData {
  ok:      boolean;
  message: string;
  Data:    ApiBaseSalary[];
  total:   number;
}
export const BaseSalaryEmptyState:BaseSalaryDataApp[] = [{
    _id:          '',
    position:     '',
    valuePerHour: 0,
    BaseSalary: 0,
    User_id:         '',
    UserNames:         '',
    UserEmail:         '',
    createdAt: new Date(),
    updateAt: new Date()
}]



export const BaseSalaryDataContextEmptyState:BaseSalaryDataContext ={
    status: StatusData.NO_OBTAINED,
    message: '',
    Data: BaseSalaryEmptyState,
    total: 0
  }





