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
  const style = {};
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase"};
  return (
    <header className="header">
      <h1>Fast react pizza </h1>
    </header>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our menu</h2>
      <ul className="pizzas">
        {pizzaData.map(function (pizza) {
          return <Pizza theObj={pizza} key={pizza.name} />;
        })}
      </ul>

      {/* 旧方法
      <Pizza
        name="Pizza Spinaci"
        ingredients="tomato, mozarella, spinich"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushroom"
        price={12}
        photoName="Pizzas/funghi.jpg"
      /> */}
    </div>
  );
}

function Footer() {
  const currentHour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = currentHour >= openHour && currentHour <= closeHour;
  console.log(isOpen);
  // if (currentHour >= openHour && currentHour <= closeHour)
  //   alert("We're currently open!");
  // else alert("Sorry! We're closed!");

  //  IF not using JXS it will need to be like this: return React.createElement("footer", null, "we are currently open");
  // 如果底下代码太长 可以extract成 if(!isOpen) return <p>Closed</p>
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          {new Date().toLocaleTimeString()}
          <br></br>
          <p>We're currently open</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>Sorry we're closed!</p>
      )}
    </footer>
  );
}

function Pizza({ theObj }) {
  //if (theObj.soldOut) return null;
  return (
    <li className={`pizza ${theObj.soldOut ? "sold-out" : ""}`}>
      <img src={{ theObj }.theObj.photoName} alt={{ theObj }.theObj.name} />
      <div>
        <h3>{{ theObj }.theObj.name}</h3>
        <p>{{ theObj }.theObj.ingredients}</p>
        <span>{theObj.soldOut ? "SOLD OUT" : { theObj }.theObj.price} </span>
      </div>
    </li>
  );

  // // 原方法
  //   <div className="pizza">
  //     <img src={abc.photoName} alt="Pizza Spinaci" />
  //     <div>
  //       <h3>{abc.name}</h3>
  //       <p>{abc.ingredients}</p>
  //       <span>{abc.price + 3} </span>
  //     </div>
  //   </div>
  // );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
