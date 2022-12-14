import { StatusLogin } from "./StatusLogin"

export interface User {
        _id: string,
        Names: string,
        email: string,
        status: string,
        img: string,
        role: string,
        createdAt: string,
        updatedAt:string,  
    
}
export interface ApiUserLogin{

        status: string,
        message: string,
        remerberMe: boolean,
        Data: {
            user:User
            token: string
        }
        
        
}
export const UserEmptyState: User = {

    _id: '',
    Names: '',
    email: '',
    status: '',
    img: '',
    role: '',
    createdAt:  '',
    updatedAt: '',
}

export const UserLoginEmptystate: ApiUserLogin = {

    status: StatusLogin.NOT_AUTENTICATED,
    message: '',
    remerberMe: false,
    Data: {
        user:UserEmptyState,
        token: ''
    }
}

export const UserOnLogin: ApiUserLogin = {

    status: StatusLogin.AUTENTICATED,
    message: '',
    remerberMe: true,
    Data: {
        user:UserEmptyState,
        token: ''
    }
}