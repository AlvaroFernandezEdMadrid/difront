import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Grid from './Grid.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Grid />
  </StrictMode>,
)