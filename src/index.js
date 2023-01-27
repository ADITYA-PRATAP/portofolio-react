import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import React from 'react'


const root = document.getElementById("root")



ReactDOM.createRoot(root).render(
    <React.StrictMode>

        <App/>
    </React.StrictMode>
)
 
//ReactDOM.render(<App/>,document.querySelector('#root'));