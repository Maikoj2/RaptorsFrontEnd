import { chackingCredentials } from "@/redux/slices/auth.slice"

export const checkingAutentication = (email: string, password: string): any => {

    return async (dispath: any) => {
        dispath(chackingCredentials())
    }

}