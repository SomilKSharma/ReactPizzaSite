import React from "react"
import ReactDOM from "react-dom/client"

// create the app component
function App() {
    return <h1> Hello React!</h1>
}

// create root
const root = ReactDOM.createRoot(
    document.getElementById(`root`)
)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>)