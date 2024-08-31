import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DatacontextProvider from './context/Datacontext.jsx'

createRoot(document.getElementById('root')).render(
  <DatacontextProvider>
    <App></App>
  </DatacontextProvider>
)
