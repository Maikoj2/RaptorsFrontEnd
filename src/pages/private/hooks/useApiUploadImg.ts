import { ApiRoutes } from "@/models";
import {  AxiosSetItem } from "../services/AxiosDatabase.service";
import { upLoadAdapter } from "../adapters";



export const useUpload = () => {
    const UploadImg = (File:any) => {
        const formData = new FormData()
        formData.append('img', File);
       return  AxiosSetItem(ApiRoutes.API_UP_LOAD , formData , upLoadAdapter)      
    }

    return {
        UploadImg
    }
}