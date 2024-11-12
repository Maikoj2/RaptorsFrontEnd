import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { ButtonCustom, Label } from '@/style-components';
import InputForm from './Components/InputForm/InputForm';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/storer';
import { useState } from 'react';
import { StatusLogin } from '@/models';
import { LayoutcheckBoxInputswitch, CheckBoxInputswitch } from '../../style-components/Input.style';
import { UseAuthStore } from '@/hooks';
import { FormLoginValues, LoginSchema } from '../../models';


const CustomForm2 = () => {
  const { startLogin } = UseAuthStore()
  const { control, handleSubmit, formState: { errors, isValid } } = useForm<FormLoginValues>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: 'maicol9@jimenez.co',
      password: '000000',
    },
  })
  const userState = useSelector((state: AppStore) => state.loginUser)

  const [Remenberme, setRemenberme] = useState(true)

  const onSubmit: SubmitHandler<FormLoginValues> = (data) => {
    isValid && startLogin({ email: data.email, password: data.password }, Remenberme)
  }
  const onSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRemenberme(event.target.checked)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputForm
        name='email'
        control={control}
        label='Email'
        placeholder='Example@example.com'
        error={errors.email}
        type='email'
      >
      </InputForm>
      <InputForm
        name='password'
        control={control}
        label='password'
        error={errors.password}
        type='password'
        placeholder='******'>
      </InputForm>
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
export default CustomForm2;