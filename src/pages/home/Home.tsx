

import { PrivateRoutes, PublicRoutes } from '@/models';
import {  useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { FlexBetween } from '../private/style-components-private/flexBetween';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: #4caf50;
  color: white;
  font-size: 1.2rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #388e3c;
  }
`


const Home = () => {
  const Navigate = useNavigate()
  const handelclicked = () => {
    Navigate(`/${PublicRoutes.LOGIN}`, {replace: true})
  }
  return (

    <PageContainer>
      <Title>Bienvenida valery </Title>
      <Subtitle>Explora todo lo que tenemos para ofrecerte</Subtitle>
      <FlexBetween>
        <Button>Ver más</Button>
        <Button onClick={handelclicked }>login</Button>
      </FlexBetween>
    </PageContainer>

  )
}
export default Home
