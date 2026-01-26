import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { UserProvider } from './component/utilities/UserContext.jsx'
import { store } from './component/utilities/store.jsx'

createRoot(document.getElementById('root')).render(
   <Provider store={store}>
  <StrictMode>
      <HashRouter>
      <UserProvider>
         <App />
         </UserProvider>
      </HashRouter>
       </StrictMode>
       </Provider>
)