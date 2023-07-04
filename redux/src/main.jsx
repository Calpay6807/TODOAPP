import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
/*
!Provider
* store da tutulan verilerin uygulama tarafından erişilmesini sağlar
*/
import {Provider} from "react-redux"
// Store çağırılması
import store from "./redux/Store.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
  <App />
  </Provider>
   
  </React.StrictMode>,
)
