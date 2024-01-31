import { typeWithKey } from "@/models";
import { BaseSalaryDataContext } from "./apiSalaryBase.types";
import { staffDataContext } from "./apiStaff.types";

export  const StaffActionReducers:typeWithKey<string> = {
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
  