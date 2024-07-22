import React, { useState } from "react";
import img1 from "../img/tour-1.png";
import img2 from "../img/tour-2.png";
import img3 from "../img/tour-3.png";
import img4 from "../img/tour-4.png";
import img5 from "../img/tour-5.png";
import img6 from "../img/tour-6.png";
import img7 from "../img/tour-7.png";
import img8 from "../img/tour-8.png";
import img9 from "../img/tour-9.png";
import img10 from "../img/tour-10.png";
import img11 from "../img/tour-11.png";
import img12 from "../img/tour-12.png";
import img13 from "../img/tour-13.png";
import img14 from "../img/tour-14.png";
import img15 from "../img/tour-15.png";
import img16 from "../img/tour-16.png";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import "../css/products.css";

export default function (props) {
    const {category}=props;
    console.log(category);
  const [list, setList] = useState([
    {
      id: 1,
      name: "New York",
      img: img1,
      tittle: "Three Temples Bangkok City Tour Must Visit",
      price: 149.99,
      oldPrice: 250.0,
    },
    {
      id: 2,
      name: "New York",
      img: img2,
      tittle: "Essence of Vietnam South to North",
      price: 167.19,
      oldPrice: 250.0,
    },
    {
      id: 3,
      name: "New York",
      img: img3,
      tittle: "Osa Peninsula to Dominical City Tour",
      price: 134.99,
      oldPrice: 250.0,
    },
    {
      id: 4,
      name: "New York",
      img: img4,
      tittle: "Mt Fuji, Hakone, Lake Ashi Cruise",
      price: 50.15,
      oldPrice: 250.0,
    },
    {
        id:5,
        name: "London",
        img: img5,
        tittle: "Three Temples Bangkok City Tour Must Visit",
        price: 149.99,
        oldPrice: 250.0,
    },
      {
        id:6,
        name: "London",
        img: img6,
        tittle: "Three Temples Bangkok City Tour Must Visit",
        price: 149.99,
        oldPrice: 250.0,
    },
    {
        id:7,
        name: "London",
        img: img7,
        tittle: "Three Temples Bangkok City Tour Must Visit",
        price: 149.99,
        oldPrice: 250.0,
    },
    {
        id:8,
        name: "London",
        img: img8,
        tittle: "Three Temples Bangkok City Tour Must Visit",
        price: 149.99,
        oldPrice: 250.0,
    },
    {
        id:9,
        name: "Tokyo",
        img: img9,
        tittle: "Three Temples Bangkok City Tour Must Visit",
        price: 149.99,
        oldPrice: 250.0,
    },
    {
        id:10,
        name: "Tokyo",
        img: img10,
        tittle: "Three Temples Bangkok City Tour Must Visit",
        price: 149.99,
        oldPrice: 250.0,
    },
    {
        id:11,
        name: "Tokyo",
        img: img11,
        tittle: "Three Temples Bangkok City Tour Must Visit",
        price: 149.99,
        oldPrice: 250.0,
    },
    {
        id:12,
        name: "Tokyo",
        img: img12,
        tittle: "Three Temples Bangkok City Tour Must Visit",
        price: 149.99,
        oldPrice: 250.0,
    },
    {
        id:13,
        name: "Los Angeles",
        img: img13,
        tittle: "Three Temples Bangkok City Tour Must Visit",
        price: 149.99,
        oldPrice: 250.0,
    },  {
        id:14,
        name: "Los Angeles",
        img: img14,
        tittle: "Three Temples Bangkok City Tour Must Visit",
        price: 149.99,
        oldPrice: 250.0,
    },
    {
        id:15,
        name: "Los Angeles",
        img: img15,
        tittle: "Three Temples Bangkok City Tour Must Visit",
        price: 149.99,
        oldPrice: 250.0,
    },
    {
        id:16,
        name: "Los Angeles",
        img: img16,
        tittle: "Three Temples Bangkok City Tour Must Visit",
        price: 149.99,
        oldPrice: 250.0,
    },
  
    
  ]);
  const filterList = list.filter((item) => item.name === category);
    console.log(filterList);
  
//   console.log(category);
  return (
    <div className="products ">
      {filterList.map((item, index) => (
       <div className="product" key={index}>
       <Card
          style={{
            width: "18rem",
          }}
        className=""
        >
          <img alt="Sample" src={item.img}/>
         
          <CardBody>
          
            <CardTitle className="mb-2 text-muted" tag="h7"><i class="fa-solid fa-location-dot"></i>{item.name}</CardTitle>
            <br />
            <br />
            <CardSubtitle  tag="h5">
              {item.tittle}
            </CardSubtitle>
            <br />
            <CardText>
              From <span className="price">${item.price}</span> <span className="oldPrice">${item.oldPrice}</span>
            </CardText>
          
            <CardText className="star"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></CardText>
         
          </CardBody>
        </Card>
        </div>
      ))}
    </div>
  );
}
