import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";
import Nav from "./Nav";

const RouteSwitch = () => {
    const [count, setCount] = useState(0);
    const [itemCount, setItemCount] = useState(1)
    const [page, setPage] = useState("home")

    
    useEffect(() => {
      const links = document.querySelectorAll(".header-links");
      const addButton = document.getElementById("addItem");

      

      const pageChange = (e) =>{
        setPage(e.target.getAttribute("data-page"));
        console.log(e.target)
      }
      const addToCart = () =>{
        setCount(count+parseInt(itemCount));
      }

      for(let i=0; i<links.length; i++){
        links[i].addEventListener('click', pageChange);
      }


      if(page =="shop"){
        addButton.addEventListener("click", addToCart);
      }
       
    
        return () => {
          if(page == 'shop'){
            addButton.removeEventListener("click", addToCart)
          }
           
           for(let i=0; i<links.length; i++){
            links[i].removeEventListener('click', pageChange)
          }

        };
      },[count, itemCount, page] );

      const increaseValue =()=> {
        var value = parseInt(document.getElementById('number').value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        setItemCount(itemCount+1)
        console.log(itemCount)
        document.getElementById('number').value = value;
      }
      
       const decreaseValue = () => {
        var value = parseInt(document.getElementById('number').value, 10);
        value = isNaN(value) ? 0 : value;
        value--;
        setItemCount(itemCount-1)
        console.log(itemCount)
        document.getElementById('number').value = value;
      }

      const onChange = (e) => {
        setItemCount(e.target.value)
        console.log(itemCount)
      }


  return (
    <BrowserRouter>
    <Nav itemCount={count}/>
      <Routes>
        <Route path="/" exact element={
            <App />
        }/>
        <Route path="/shop"  element={
            <Shop
              value={itemCount}
              decreaseValue={decreaseValue}
              increaseValue={increaseValue}
              onChange={onChange}
              
            />
        }/>
         
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;