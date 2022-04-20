import React, { Component } from 'react';
import Item from "./item";
import './Shop.css'


class Shop extends Component{
  constructor(props){
      super(props)


  }

   

  render(){
      return(
        <div className='shop'>
          <div className="items-container">
            {this.props.items.map((item) => {
              return <Item
              key={item.id}
              name={item.name}
              price={item.price}
              img={item.img}
              id={item.id}
              data={item.id}
              pos={item.pos}
              value={item.count}
              decreaseValue={this.props.decreaseValue}
              increaseValue={this.props.increaseValue}
              onChange={this.props.onChange}
              />;
            })}
          </div>
        </div>
        
      )}}



  
  export default Shop;