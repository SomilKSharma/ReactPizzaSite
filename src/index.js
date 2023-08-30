import React from "react"
import ReactDOM from "react-dom/client"
import './index.css'

// pizza data for putting in the application
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
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

// header component
function Header() {
    return (
        <header className="header">
            <h1 >
                Doon Pizza
            </h1>
        </header>
    )
}

// menu component
function Menu() {
    return (
        <main className="menu">
            <h2>Our Menu</h2>
            <Pizza
                name='Pizza Spinaci'
                ingredient='Tomato, mozarella, spinach, and ricotta cheese'
                photoName='pizzas/spinaci.jpg'
                price={100}
            />
            <Pizza
                name='Pizza Funghi'
                ingredient='Mozarella, Mushroom, and Apple'
                photoName='pizzas/funghi.jpg'
                price={10}
            />
            <Pizza
                name='Pizza Salamino'
                ingredient='Tomato, mozarella, spinach, and ricotta cheese'
                photoName='pizzas/salamino.jpg'
                price={15}
            />
            <Pizza
                name='Pizza Prosciutto'
                ingredient='Tomato, mozarella, spinach, and ricotta cheese'
                photoName='pizzas/prosciutto.jpg'
                price={78}
            />
        </main>
    )
}

// function of the pizza
function Pizza(props) {
    return <div className="pizza">
        <img src={props.photoName} alt={props.name} />
        <div>
            <h3>{props.name}</h3>
            <p>{props.ingredient}</p>
            <span>{props.price + 3}</span>
        </div>
    </div>
}

// footer component
function Footer() {
    // create a new variable
    const hour = new Date().getHours()
    const openHour = 11
    const closeHour = 22
    const isOpen = openHour <= hour && hour <= closeHour
    // check for open and close
    if (isOpen) {
        return (
            <footer className="footer">
                {new Date().toLocaleTimeString()} <b> We're currently open</b>
            </footer>
        )
    } else {
        return (
            <footer className="footer">
                {new Date().toLocaleTimeString()} <b>We're not open</b>
            </footer>
        )
    }

}

// create root
const root = ReactDOM.createRoot(
    document.getElementById(`root`)
)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>)