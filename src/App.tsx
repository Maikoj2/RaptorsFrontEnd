import { Suspense, useMemo } from 'react'
import { useSelector, Provider } from 'react-redux'
import storer, { AppStore } from './redux/storer'
import { createTheme, ThemeProvider } from '@mui/material'
import { themeSettings } from './pages/private/theme'
import { Loading } from './components'
import Routes from './Routes'

function App () {
  return (
    <div className="App">
      <Suspense fallback={<>{<Loading />}</>} >
        <Provider store={storer}>
          <Routes />
        </Provider>
      </Suspense>
    </div>
  )
}

export default App
