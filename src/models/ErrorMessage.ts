export interface apiErrorMessage{
   ok: boolean;
   message: string;
   error: {
      errors: ValidateError[]
   }   
}

export interface ValidateError{
   msg?:string;
   param?:string;
   location?:string;
   value?:string;
   name?:string;
   
}






