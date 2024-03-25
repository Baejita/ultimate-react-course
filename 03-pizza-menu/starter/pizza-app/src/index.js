import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
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

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = {
  //   color: "orange",
  //   fontSize: "56",
  //   fontWeight: "bold",
  //   textTransform: "uppercase",
  // };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];

  //ทดสอบให้เป็นตัวเลข
  const numPizza = pizzas.length; //จะได้ค่า 0 ต้องใส้คอนดิชั่นเช่น > < เข้าไปให้เป็น true หรือ false
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizza > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic,, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza
                pizzaOject={pizza}
                key={pizza.name}
                // name={pizza.name}
                // photoName={pizza.photoName}
                // ingredients={pizza.ingredients}
                // price={pizza.price}
              />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
      )}
    </main>
  );
}

function Pizza({ pizzaOject }) {
  // console.log(props);
  // if (pizzaOject.soldOut) return null;
  return (
    <li className={`pizza ${pizzaOject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaOject.photoName} alt={pizzaOject.name} />

      <div>
        <h3>{pizzaOject.name}</h3>

        <p>{pizzaOject.ingredients}</p>
        <span>{pizzaOject.soldOut ? "Sold out" : pizzaOject.price}</span>
      </div>
    </li>
  );
}

function Footer(props) {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour) alert("We are currently OPEN!");
  // else alert("Sorry, we are closed");

  return (
    <footer className="footer">
      {isOpen ? (
        <Oder closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 - {closeHour}:00.
        </p>
      )}
    </footer>
  );

  function Oder({ closeHour, openHour }) {
    return (
      <div className="order">
        <p>
          We're open from {openHour}:00 to {closeHour}:00. Come visit us or
          order online.
        </p>
        <button className="btn">Order Now</button>
      </div>
    );
  }
  // React.createElement("footer", null, "We're currently have open.");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
