import { type typeWithKey } from '@/models'

export const getValidationError = (ErrorCode: any) => {
  const codeMatcher: typeWithKey<string> = {
    ERR_BAD_REQUEST: 'Request failed with status code 401',
    ERR_NETWORK: 'Connection Error with the backend',
    INVALID_TOKEN: 'The token is invalid or expired',
    VALIDATE_ERROR: 'hay un error de validación',
    WRONG_CREDENTIALS: 'la clave y/o el email es incorrecta',
    ERROR_DELETED: 'No puedes eliminar tu propia cuenta',
    ERROR_IMG: 'No se ha seleccionado Ninguna imagen',
    ERROR_UPLOAD_VALIDATION: 'el archivo debe ser una imagen ',
  }
  return codeMatcher[ErrorCode]
}
