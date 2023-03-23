import { Routes, Route } from 'react-router-dom'
import { lazy } from 'react'
const NopageNoFound = lazy(async () => await import('../components/NopageNoFound/NopageNoFound'))
interface Props {
  children: JSX.Element[] | JSX.Element
}

function RoutesWithNotFound ({ children }: Props) {
  return (
    <Routes>
      {children}
      <Route path='*' element={<NopageNoFound/>} />
    </Routes>
  )
}

export default RoutesWithNotFound
