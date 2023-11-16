import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { NewsAppProvider } from './context/NewsAppProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NewsAppProvider>
      <App />
    </NewsAppProvider>
  </React.StrictMode>,
)
