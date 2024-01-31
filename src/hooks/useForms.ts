import { useState } from 'react'

export interface ValidationOptions {
  validators: Array<(value: any) => boolean | Promise<boolean>>
  errorMessages: string[]
}
export interface FormOptions {
  initialValues: any
  validations: Record<string, ValidationOptions>
  onSubmit?: (values: any) => void
}
interface FormState {
  values: any
  errors: Record<string, string>
  touched: Record<string, boolean>
  isSubmitting: boolean
  isValidating: boolean
  isValid: boolean
}

export const useForm = ({ initialValues, validations, onSubmit }: FormOptions) => {
  const [formState, setFormState] = useState<FormState>({
    values: initialValues,
    errors: {},
    touched: {},
    isSubmitting: false,
    isValidating: false,
    isValid: false
  })

  const validateField = async (fieldName: string, value: any) => {
    const validation = validations[fieldName]
    if (!validation) {
      return true
    }

    let isValid = true
    const errorMessages: string[] = []
    for (let i = 0; i < validation.validators.length; i++) {
      const validator = validation.validators[i]
      const errorMessage = validation.errorMessages[i]

      try {
        isValid = await validator(value)
      } catch (err: any) {
        errorMessages.push(err.message || 'Validation failed')
        isValid = false
      }

      if (!isValid) {
        errorMessages.push(errorMessage)
      }
    }
    const errors = { ...formState.errors }
    const touched = { ...formState.touched }

    if (isValid) {
      delete errors[fieldName]
    } else {
      errors[fieldName] = errorMessages[0] || validation.errorMessages[0]
    }

    touched[fieldName] = true

    const isValidForm = Object.keys(validations).every((key) => !errors[key])

    setFormState((prevState) => ({
      ...prevState,
      errors,
      touched,
      isValid: isValidForm
    }))

    return isValid
  }

  const validateForm = async (values: any) => {
    const promises = Object.keys(validations).map(async (fieldName) => await validateField(fieldName, values[fieldName]))

    const results = await Promise.all(promises)
  
    

    return results.every((result) => result)
  }

  const handleChange = (event: React.ChangeEvent<any>) => {
    let { name, value } = event.target
    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value
      }
    }))
    validateField(name, value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const isValid = await validateForm(formState.values)
    console.log(isValid);
    console.log(formState.values);

    setFormState((prevState) => ({
      ...prevState,
      isSubmitting: true,
      isValidating: true,
      isValid
    }))

    if (isValid && (onSubmit != null)) {
      onSubmit(formState.values)
    }

    setFormState((prevState) => ({
      ...prevState,
      isSubmitting: false,
      isValidating: false
    }))
    const errorMessages = getErrorMessages(formState.errors, formState.values, true)
    setFormState((prevState) => ({
      ...prevState,
      errors: errorMessages
    }))

    console.log(formState);
  }

  const getErrorMessages = (errors: Record<string, string>, touched: Record<string, boolean>,includeUntouchedFields: boolean = false) => {
    const errorMessages: Record<string, string> = {}

    Object.keys(errors).forEach((fieldName) => {
      if (touched[fieldName] || includeUntouchedFields) {
        errorMessages[fieldName] = errors[fieldName]
      }
    })

    return errorMessages
  }

  const handleReset = () => {
    setFormState({
      values: initialValues,
      errors: {},
      touched: {},
      isSubmitting: false,
      isValidating: false,
      isValid: false
    })
  }
  

  return {
    values: formState.values,
    errors: formState.errors,
    touched: formState.touched,
    isSubmitting: formState.isSubmitting,
    isValidating: formState.isValidating,
    isValid: formState.isValid,
    handleChange,
    handleSubmit,
    handleReset,
    errorMessages: getErrorMessages(formState.errors, formState.touched)
  }
}
