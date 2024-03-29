import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.css'
import { Toaster } from "@/components/ui/sonner"




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <App />
    <Toaster/>
  </React.StrictMode>
)
