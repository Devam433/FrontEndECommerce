import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import Cart from './pages/Cart.jsx'
import { store } from './store/store.js'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>,
      errorElement:null,
      children:[
        {
          path:'/',//index path
          element:<Home/>
        },
        {
          path:'/products', 
          element:<Products/>,
        },
        {
          path:'/cart',
          element:<Cart/>,
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}> 
    </RouterProvider>
    </Provider>
  </React.StrictMode>,
)