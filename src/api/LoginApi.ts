import { getEnvVariable } from "@/helpers";
import { LocalStorageType } from "@/models";
import { getLocalStorage } from "@/utilities";
import axios from "axios";


const {  VITE_REACT_URL } = getEnvVariable()

const RaptorsApi = axios.create({
    baseURL: VITE_REACT_URL 
});

RaptorsApi.interceptors.request.use((config ) => {
    config.headers = {
        ...config.headers,
        'token' : getLocalStorage(LocalStorageType.TOKEN) 
    }
return config
}

)


export default RaptorsApi;