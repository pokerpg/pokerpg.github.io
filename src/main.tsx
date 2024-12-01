import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// @ts-ignore TODO Figure out why this runs a ts error.
import {App} from './App.tsx'
import './index.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
