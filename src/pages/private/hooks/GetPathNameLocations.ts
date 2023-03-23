import { useLocation } from 'react-router-dom'

export const useGetPathNameLocation = () => {
  const { pathname } = useLocation()
  const pathSepared = pathname.split('/')

  const pathBreadCromb = pathSepared.map((Path) => { return (Path !== '') })
  const NameOfpage = pathSepared[pathSepared.length - 1]

  return {
    pathBreadCromb,
    NameOfpage
  }
}
