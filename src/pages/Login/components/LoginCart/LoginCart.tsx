import React from 'react'
import { CardBody, CardHeader } from '../../style-components'
import { CardFooter, CartTitle, Card } from '../../style-components/cart.style'
import { CustomForm } from '../CustomForm'

export interface LoginCartInterface { }

const LoginCart: React.FC<LoginCartInterface> = () => {
  return (
    < >
      <Card id=''>
        <CardHeader>
          <CartTitle className='text-center'>
            welcome to RaptorAdmin
          </CartTitle>
          <p>Enter your email and password to sign in</p>
        </CardHeader>
        <CardBody>
          <CustomForm/>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </>
  )
}

export default LoginCart
