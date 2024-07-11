import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from './routes/router.jsx'
import { RouterProvider } from 'react-router-dom'
import { Provider  } from 'react-redux';
import { store } from './store/store';
 


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router = {router}/>
  </Provider>


)
