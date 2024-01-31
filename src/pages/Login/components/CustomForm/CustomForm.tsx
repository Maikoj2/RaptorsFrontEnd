import { UseAuthStore, useForm } from '@/hooks'
import { StatusLogin } from '@/models'
import { type AppStore } from '@/redux/storer'
import { ButtonCustom, Label } from '@/style-components'
import { Box } from '@mui/material'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { ErrorMsg } from '../../style-components'
import { CheckBoxInputswitch, CustomInput, LayoutcheckBoxInputswitch } from '../../style-components/Input.style'

const initialValues = {
  email: 'maicol9@jimenez.co', password: '000000'
}
const validations = {
  email: {
    validators: [
      (value: any) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      (value: any) => value.length > 0
    ],
    errorMessages: ['Email is not available', 'Please enter a email']
  },
  password: {
    validators: [(value: any) => value.length > 0],
    errorMessages: ['Please enter a password']
  }
}

const Form = () => {
  const { startLogin } = UseAuthStore()
  const { values, errors, touched, handleChange, handleSubmit, handleReset } = useForm({
    initialValues,
    validations,
    onSubmit: (values: any) => {
      // console.log(values);
      startLogin({ email: values.email, password: values.password }, Remenberme)
    }
  })
  const userState = useSelector((state: AppStore) => state.loginUser)

  const [Remenberme, setRemenberme] = useState(true)

  const onSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRemenberme(event.target.checked)
  }
  return (
    <form onSubmit={async (e: any) => { await handleSubmit(e) }}>
      <Label>Email</Label>
      <Box marginBottom={'1rem'}>
        <CustomInput
          type="email"
          placeholder="Examples@example.com"
          name="email"
          value={values.email}
          onChange={handleChange} />
        {touched.email && errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}
      </Box>
      <Label>Password</Label>
      <Box marginBottom={'1rem'}>
        <CustomInput
          type="password"
          placeholder="Password"
          name="password"
          value={values.password}
          onChange={handleChange}
          className="form-control" />
        {touched.password && errors.password && <ErrorMsg>{errors.password}</ErrorMsg>}
      </Box>
      <LayoutcheckBoxInputswitch>
        <CheckBoxInputswitch type="checkbox" id="rememberMe" onChange={onSwitch} checked={Remenberme} />
        <Label className="checkLabel" htmlFor="rememberMe">Remember me</Label>
      </LayoutcheckBoxInputswitch>
      <Box marginBottom={'1rem'} textAlign={'center'}>
        <ButtonCustom type='submit' name='btnGradient' disabled={userState.status === StatusLogin.CHECKING}>Sign in</ButtonCustom>
      </Box>
    </form>

  )
}

export default Form
