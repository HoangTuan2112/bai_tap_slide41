import React, { useRef } from "react";
import "../css/session1.css";
import { Button } from "reactstrap";
import Products from "./Products";

export default function Session1() {
  const [activeButton, setActiveButton] = React.useState("New York");
  const [category, setCategory] = React.useState("New York");
  const handleActive = (buttonId) => {
    setActiveButton(buttonId);
    setCategory(buttonId);
  };
  
  return (
    <div className="container">
      <h3>Perfect destination</h3>
      <h2>Trending destinations</h2>
      <div>
        <div className="btn">
          <Button
            color={activeButton === "New York" ? "success" : "light"}
            size="lg"
            onClick={() => handleActive("New York")}
          >
            New York
          </Button>
          <Button
            color={activeButton === "London" ? "success" : "light"}
            size="lg"
            onClick={() => handleActive("London")}
          >
            London
          </Button>
          <Button
            color={activeButton === "Tokyo" ? "success" : "light"}
            size="lg"
            onClick={() => handleActive("Tokyo")}
          >
            Tokyo
          </Button>
          <Button
            color={activeButton === "Los Angeles" ? "success" : "light"}
            size="lg"
            onClick={() => handleActive("Los Angeles")}
          >
            Los Angeles
          </Button>
         
        </div>
        
      </div>
      <Products category={category}/>
    </div>
  );
}