import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
const NopageNoFound = lazy(() => import('../components/NopageNoFound/NopageNoFound'))
interface Props {
  children: JSX.Element[] | JSX.Element
}

function RoutesWithNotFound({ children }: Props) {
  return (
    <Routes>
      {children}
      <Route path='*' element={<><NopageNoFound/></>} />
    </Routes>
  )
}

export default RoutesWithNotFound