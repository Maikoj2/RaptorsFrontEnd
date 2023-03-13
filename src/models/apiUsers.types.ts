import { User } from "./apiData.types";


export interface ApiUsers{
    status: string,
    message: string,
    Data: User[]
      
}
export const UsersEmptyState: User = {

    _id: '',
    Names: '',
    email: '',
    status: '',
    img: '',
    role: '',
    createdAt:  '',
    updatedAt: '',
}