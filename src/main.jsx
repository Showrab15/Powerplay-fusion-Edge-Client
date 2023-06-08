import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import AuthProvider from './Provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
 <AuthProvider>
   <React.StrictMode>
    <div className="max-w-7xl mx-auto">
    <RouterProvider router={router} />

    </div>
  </React.StrictMode>,
 </AuthProvider>
)
