import React from 'react'
import ReactDOM from 'react-dom/client'


import App from './App'
import './index.css'
import { Provider } from 'react-redux';
import storer from './redux/storer';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>

 
      <React.StrictMode>
      <Provider store={storer}>
        <App />
      </Provider>
      </React.StrictMode>

  </>
)
