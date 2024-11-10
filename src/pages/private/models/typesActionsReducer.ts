import { TypeWithKey } from "@/models";
import { BaseSalaryDataContext } from "./apiSalaryBase.types";
import { staffDataContext } from "./apiStaff.types";
import { UsersData } from "./apiUsers.types";

export  const StaffActionReducers:TypeWithKey<string> = {
    GET_ALL_STAFF: '[staff] getAllStaff',
    SET_STAFF: '[staff] setStaff',
    UPDATE_STAFF: '[staff] updateStaff',
    DELETE_STAFF: '[staff] deleteStaff',
    CHECKING_STAFF: '[staff] CHECKING',
}
export  const BaseSalaryActionsReducers = {
    GET_ALL_BASE_SALARY: '[staff] getAllBaseSalary',
    CHECKING: '[staff] CHECKING',

}
export  const UsersActionReducers:TypeWithKey<string> = {
  GET_ALL_USERS: '[Users] getAllUsers',
  SET_USER: '[Users] setUser',
  UPDATE_USER: '[Users] updateUser',
  DELETE_USER: '[Users] deleteUser',
  CHECKING_USER: '[Users] CHECKING',
}
// Definir una interfaz genérica para las acciones



  export interface StaffActions {
    type: string;
    payload: {
      StaffContext: staffDataContext ;
    };
  }
  export interface BaseSalaryActions {
    type: string;
    payload: {
      StaffContext: BaseSalaryDataContext ;
    };
  }
  export interface UsersActions {
    type: string;
    payload: {
      UserContext: UsersData ;
    };
  }
  