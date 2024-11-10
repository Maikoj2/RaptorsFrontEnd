import { type TypeWithKey } from '@/models'

export const getValidationSuccessMsg = (ErrorCode: any) => {
  const codeMatcher: TypeWithKey<string> = {
    ERR_BAD_REQUEST: 'Request failed with status code 401',
    ERR_NETWORK: 'Conection Error with the backend',
    INVALID_TOKEN: 'The token is invalid or expired',
    VALIDATE_ERROR: 'Error of validation',
    WRONG_CREDENTIALS: 'la clave y/o el email es incorrecta'
  }
  return codeMatcher[ErrorCode]
}
