
import { apiAStaff, apiStaffData, staffDataContext } from '@/pages/private/models';


export const allStaffAdapter = ({ ok, message, Data, total }: apiStaffData): staffDataContext => {
    const Userdata = Data.map((worker) => ({
        _id:               worker._id,
        id_BaseSalary:     worker.id_BaseSalary._id,
        position:          worker.id_BaseSalary.position,
        valuePerHour:      worker.id_BaseSalary.valuePerHour,
        BaseSalary:        worker.id_BaseSalary.BaseSalary,
        profession:        worker.profession,
        TypeSalary:        worker.TypeSalary,
        Persona_id:        worker.id._id,
        Personaid:         worker.id.id,
        IdType:            worker.id.IdType,
        Names:             worker.id.Names,
        SureNames:         worker.id.SureNames,
        Gender:            worker.id.Gender,
        neighborhood:      worker.id.neighborhood,
        Address:           worker.id.Address,
        Phone:             worker.id.Phone,
        occupation:        worker.id.occupation,
        email:             worker.id.email,
        EPS:               worker.id.EPS,
        img:               worker.id.img,
        DateofBirth:       worker.id.DateofBirth,
        DepartamentBirth:  worker.id.DepartamentBirth,
        MunicipeBirth:     worker.id.MunicipeBirth,
        user_id:           worker.id.user._id,
        userNames:         worker.id.user.Names,
        useremail:         worker.id.user.email,
        role:              worker.id.role,
        createdAt:         worker.createdAt,
        updatedAt:         worker.updatedAt,
    }))
    return {
        status: '',
        message: message,
        Data: Userdata,
        total: total,
    }
}

export const SaveStaffAdapter = ({ ok, message, Data, total }: apiAStaff): staffDataContext => {
    // console.log(Data);
    const Userdata =[ {
        _id:               Data._id,
        id_BaseSalary:     Data.id_BaseSalary._id,
        position:          Data.id_BaseSalary.position,
        valuePerHour:      Data.id_BaseSalary.valuePerHour,
        BaseSalary:        Data.id_BaseSalary.BaseSalary,
        profession:        Data.profession,
        TypeSalary:        Data.TypeSalary,
        Persona_id:        Data.id._id,
        Personaid:         Data.id.id,
        IdType:            Data.id.IdType,
        Names:             Data.id.Names,
        SureNames:         Data.id.SureNames,
        Gender:            Data.id.Gender,
        neighborhood:      Data.id.neighborhood,
        Address:           Data.id.Address,
        Phone:             Data.id.Phone,
        occupation:        Data.id.occupation,
        email:             Data.id.email,
        EPS:               Data.id.EPS,
        img:               Data.id.img,
        DateofBirth:       Data.id.DateofBirth,
        DepartamentBirth:  Data.id.DepartamentBirth,
        MunicipeBirth:     Data.id.MunicipeBirth,
        user_id:           Data.id.user._id,
        userNames:         Data.id.user.Names,
        useremail:         Data.id.user.email,
        role:              Data.id.role,
        createdAt:         Data.createdAt,
        updatedAt:         Data.updatedAt,
    }]
    return {
        status: '',
        message: message,
        Data: Userdata,
        total: total,
    }
}
