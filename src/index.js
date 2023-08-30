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
    // check if pizzas are there
    return (
        <main className="menu">
            <h2>Our Menu</h2>
            <p>Authetic Food of Italian origin</p>
            <ul className="pizzas">
                {pizzaData.map(pizza =>
                    <Pizza
                        pizzaObject={pizza}
                        key={pizza.name}
                    />
                )}
            </ul>
        </main>
    )
}

// function of the pizza
function Pizza(props) {

    return <li className="pizza">
        <img src={props.pizzaObject.photoName} alt={props.pizzaObject.name} />
        <div>
            <h3>{props.pizzaObject.name}</h3>
            <p>{props.pizzaObject.ingredients}</p>
            <span>{props.pizzaObject.price + 3}</span>
        </div>
    </li>
}

// footer component
function Footer() {
    // create a new variable
    const hour = new Date().getHours()
    const openHour = 11
    const closeHour = 22
    const isOpen = openHour <= hour && hour <= closeHour
    // check for open and close and return
    return (
        <footer className="footer">
            <p>{isOpen ? `We are Open` : `We are closed`}</p>
            <button className="btn">Order</button>
        </footer >
    )


}

// create root
const root = ReactDOM.createRoot(
    document.getElementById(`root`)
)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>)