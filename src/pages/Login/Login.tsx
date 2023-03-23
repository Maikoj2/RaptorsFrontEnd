
import { BackGrounLayout, LayoutLogin } from './style-components'
import { Container, Row, CartLayout } from '@/style-components'
import { LoginCart } from './components'
import { BackGrounImg } from './style-components/BackgrounLogin'
import { useSelector } from 'react-redux'
import { type AppStore } from '@/redux/storer'
import { StatusLogin } from '@/models'
import Loading from '../../components/Loading/Loading'

const Login = () => {
  const user = useSelector((state: AppStore) => state.loginUser)
  return (
    <>{(user.status === StatusLogin.NOT_AUTENTICATED)
      ? <LayoutLogin>
        <Container>
          <Row>
            <CartLayout>
              <LoginCart />
            </CartLayout>
            <BackGrounLayout>
              <BackGrounImg />
            </BackGrounLayout>
          </Row>
        </Container>
      </LayoutLogin>
      : <Loading/>
    }
    </>
  )
}

export default Login
