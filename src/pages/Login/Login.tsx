
import { BackGrounLayout, LayoutLogin } from "./style-components"
import { Container, Row, CartLayout } from '@/style-components';
import {   DialogError, LoginCart } from './components';
import { BackGrounImg } from './style-components/BackgrounLogin';
import Customdialago, { dialogOpenSubject$ } from '../../components/Customdialago/Customdialago';
import { useSelector } from "react-redux";
import { AppStore } from "@/redux/storer";
import { useEffect, useState } from 'react';
import { UseAuthStore } from "@/hooks";




const Login = () => {
  const [errorMessge, seterrorMessge] = useState('')
  const {message} = useSelector((state: AppStore) => state.user);
  const { CheckAuthToken } =  UseAuthStore()
  useEffect(() => {
   CheckAuthToken()
  }, [])
  useEffect(() => {
    if (message !== '') {
      seterrorMessge(message)
      dialogOpenSubject$.setSubject = true;
    }
  }, [message])
  return (
    <>
      <LayoutLogin>
       <Customdialago >
        <DialogError title= 'Error' >{ errorMessge } </DialogError>
      </Customdialago>
        <Container>
          <Row>
            <CartLayout>
              <LoginCart/>
            </CartLayout>
            <BackGrounLayout>
              <BackGrounImg/>
            </BackGrounLayout>
          </Row>
        </Container>
      </LayoutLogin>
    </>
  )
}

export default Login
