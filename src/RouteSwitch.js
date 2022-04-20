import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";
import Nav from "./Nav";

const RouteSwitch = () => {
    const [count, setCount] = useState(0);
    const [state, setState] = useState({
      items: 
      [
        {
          pos: 0,
          id: "229277",
          name:"Purple Keycaps",
          price: 31.99,
          img:"https://mechanicalkeyboards.com/shop/images/products/large_C01PP202_main.jpg",
          count:1
  
        },
        {
          pos: 1,
          id: "476824",
          name:"Purple Mouse",
          price: 72.99,
          img:"https://d2rd7etdn93tqb.cloudfront.net/wp-content/uploads/2020/08/logitech-g203-lightspeed-gaming-mouse-082520.jpg",
          count:1
  
        },
        {
          pos: 2,
          id: "476823",
          name:"Purple Office Chair",
          price: 749.99,
          img:"https://i.pinimg.com/originals/52/80/38/5280389f6294b56ca994db0f58ff38af.gif",
          count:1
  
        },
        {
          pos: 3,
          id: "456789",
          name:"Purple PS5 Controller",
          price: 74.99,
          img:"https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-galactic-purple-accessory-front-right",
          count:1
  
        },
        {
          pos: 4,
          id: "987654",
          name:"Purple Night Light",
          price: 32.99,
          img:"https://cdn.shopify.com/s/files/1/0476/6649/5653/products/Lightroom-CC-Sync-044-web_8b42f12f-b45e-488b-bd3b-862cd93a1b4b_720x.jpg?v=1623421469",
          count:1
  
        },
        {
          pos: 5,
          id: "135790",
          name:"Purple iPhone 13",
          price: 879.00,
          img:"https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12-spring21_purple_04202021_big.jpg.large.jpg",
          count:1
  
        },
      ]
    })
    

    
    useEffect(() => {
      const addButton = document.querySelectorAll(".add-to-cart");
      const pathname = window.location.pathname 

      

      const addToCart = (e) =>{
        let pos = e.target.getAttribute("data-pos")
        setCount(count+parseInt(state.items[pos].count));
        resetCount(pos)
      }

      if(pathname =="/shop"){
        for(let i = 0; i<addButton.length; i++){
          addButton[i].addEventListener("click", addToCart);
        }
      }

        return () => {
          if(pathname == '/shop'){
            for(let i = 0; i<addButton.length; i++){
              addButton[i].removeEventListener("click", addToCart)
            }
          }
 
        };
      },[count, state, ] );

      const resetCount = (name) => {
        console.log(name);
        let updatedList = state.items.map(item => 
          {
            if (item.pos == name){
              return {...item, count: 0}; //gets everything that was already in item, and updates "done"
            }
            return item; // else return unmodified item 
          });
        setState({items: updatedList}); // set state to new object with updated list
      }

      const addCount = (name) => {
        console.log(name);
        let updatedList = state.items.map(item => 
          {
            if (item.id == name){
              return {...item, count: item.count+1}; //gets everything that was already in item, and updates "done"
            }
            return item; // else return unmodified item 
          });
        setState({items: updatedList}); // set state to new object with updated list
      }

      const minusCount = (name) => {
        console.log(name);
        let updatedList = state.items.map(item => 
          {
            if (item.id == name){
              return {...item, count: item.count-1}; //gets everything that was already in item, and updates "done"
            }
            return item; // else return unmodified item 
          });
        setState({items: updatedList}); // set state to new object with updated list
      }

      const changeCount = (name, value) => {
        console.log(name);
        let updatedList = state.items.map(item => 
          {
            if (item.id == name){
              return {...item, count: value}; //gets everything that was already in item, and updates "done"
            }
            return item; // else return unmodified item 
          });
        setState({items: updatedList}); // set state to new object with updated list
      }

      const increaseValue =(e)=> {
        let id = e.target.getAttribute("data-id")
        console.log(id)
        var value = parseInt(document.getElementById(id).value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        addCount(id);

        document.getElementById(id).value = value;
      }
      
       const decreaseValue = (e) => {
        let id = e.target.getAttribute("data-id")
        var value = parseInt(document.getElementById(id).value, 10);
        value = isNaN(value) ? 0 : value;
        value--;
        minusCount(id);

        document.getElementById(id).value = value;
      }

      const onChange = (e) => {
        let id = e.target.getAttribute("id")
        changeCount(id, e.target.value)
        console.log(e.target.value)
      }


  return (
    <BrowserRouter>
    <Nav itemCount={count}/>
      <Routes>
        <Route path="/ecommerce-site" exact element={
            <App />
        }/>
        <Route path="/ecommerce-site/shop"  element={
            <Shop
              items ={state.items}
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