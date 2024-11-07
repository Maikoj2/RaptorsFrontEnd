import { type typeWithKey } from '@/models'

export const getValidationError = (ErrorCode: any) => {
  const codeMatcher: typeWithKey<string> = {
    ERR_BAD_REQUEST: 'Request failed due to invalid data or parameters (status code 401).',
    ERR_NETWORK: 'Network connection error. Please check your connection and try again.',
    INVALID_TOKEN: 'The token is either invalid or has expired. Please reauthenticate.',
    VALIDATE_ERROR: 'Invalid email or password. Please try again.',
    WRONG_CREDENTIALS: 'Incorrect email or password. Please verify your credentials.',
    ERROR_DELETED: 'You cannot delete your own account.',
    ERROR_IMG: 'No image has been selected. Please choose an image.',
    ERROR_UPLOAD_VALIDATION: 'The uploaded file must be an image.',
  }
  return codeMatcher[ErrorCode]
}
