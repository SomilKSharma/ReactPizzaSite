import React from "react"
import ReactDOM from "react-dom/client"

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];


// create the app component
function App() {
    return (
        <div>
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

// header component
function Header() {
    return <h1>Doon Pizza</h1>
}

// menu component
function Menu() {
    return (
        <nav>
            <h2>Our Menu</h2>
            <Pizza />
            <Pizza />
            <Pizza />
            <Pizza />
        </nav>
    )
}

// footer component
function Footer() {
    // create a new variable
    const hour = new Date().getHours()
    const openHour = 8
    const closeHour = 22
    const isOpen = openHour <= hour <= closeHour
    return (
        <footer>{new Date().toLocaleTimeString()}We're currently open</footer>
    )
}


// function of the pizza
function Pizza() {
    return <div>
        <img src="pizzas/spinaci.jpg" alt="pizza" />
        <h2>Pizza Funghi</h2>
        <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
}

// create root
const root = ReactDOM.createRoot(
    document.getElementById(`root`)
)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>)