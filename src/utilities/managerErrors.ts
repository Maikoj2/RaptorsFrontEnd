import { apiErrorMessage, ValidateError } from "@/models";


export const ManegerErrors = (ErrorCode: any) => {

    const { message, error }: apiErrorMessage = ErrorCode
    switch (message) {
        case 'VALIDATE_ERROR': 
         return error.errors
         .map((element: ValidateError) => {
                return  (`The ${element.param}:  ${element.value}, ${element.msg} `);
            })
            

        default:
            return error;
            
    }



};