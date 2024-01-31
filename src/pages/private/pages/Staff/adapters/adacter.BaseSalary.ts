import { apiBaseSalaryData, BaseSalaryDataContext } from "@/pages/private/models"



export const allBAseSalaryAdacter = ({ ok, message, Data, total }:apiBaseSalaryData ): BaseSalaryDataContext => {
   
    const data = Data.map((res) => ({
        _id:          res._id,
        position:     res.position,
        valuePerHour: res.valuePerHour,
        BaseSalary:  res.BaseSalary,
        User_id:         res.User._id,
        UserNames:         res.User.Names,
        UserEmail:         res.User.email,
        createdAt: res.createdAt,
        updateAt: res.updateAt
      
    }))
    return {
        status: '',
        message: message,
        Data: data,
        total: total,
    }
}
