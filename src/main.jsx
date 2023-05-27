import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Auhtcontexts from './components/AuthProvider/Authcontexts.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auhtcontexts>
    <App />
    </Auhtcontexts>
  </React.StrictMode>,
)
