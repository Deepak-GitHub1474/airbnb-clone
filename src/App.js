import React from "react";
import "./App.css";
import Navbar from "./MyComponent/Navbar";
import Hero from "./MyComponent/Hero";
import Card from "./MyComponent/Card";
import Data from "./Data";

export default function App(){
  const cards = Data.map(item =>{
    return(
      <Card  

      key = {item.id}
      {...item}

      />
    )
  })
  return(
    <div className="App">
      <Navbar />
      <Hero />
      <div className="card-section">
        {cards}
      </div>

    </div>
  )
}